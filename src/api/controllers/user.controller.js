const { Caregiver } = require('../models');
const { Caretaker } = require('../models');
const { sendErr } = require('../../utils');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { ObjectId } = require('mongodb'); 

/*  ======================
 *  -- CAREGIVERS CONTROLLERS --
 *  ======================
 */

// -| Caregiver main controllers |-

const get = async (req, res, next) => {
  try {
    const caregivers = await Caregiver.find()
      .sort('-created_date')
      .lean();

    return res.status(200).json({
      message: 'All caregivers found!',
      caregivers

    });
  } catch (err) {
    return sendErr(res, err);
  }
};

const get_caregiver = async (req, res, next) => {
  try {
    const caregiver_id = req.params.caregiver_id;

    const caregiver =  await Caregiver.findById({
      _id: caregiver_id
    });

    return res.status(200).json({
      message: 'Caregiver found!',
      caregiver
      
    });
  } catch (err) {
    return sendErr(res, err);
  }
};

const get_recommendation = async (req, res, next) =>{
  try {
    const caregiver_id = req.params.caregiver_id;

    const caregiver =  await Caregiver.findById({
      _id: caregiver_id
    });

    var recommended_patients = new Array();

    for(var i = 0 ; i < caregiver.looking_to_give.length; i++){
      const caretaker = await Caretaker.find({
        "patient.looking_for": { $elemMatch:  caregiver.looking_to_give[i]},
        "accept_proposals_of._id":{ $nin: [caregiver._id]},
        "sent_proposals_to._id": { $nin: [caregiver._id] },
        "connections._id": { $nin: [caregiver._id] }
      });
      for(var j = 0; j < caretaker.length; j++){
        if(caretaker[j] != null)
        recommended_patients.push(caretaker[j])
      }
    }

    function removeDuplicates( arr, prop ) {
      var obj = {};
      for ( var i = 0, len = arr.length; i < len; i++ ){
        if(!obj[arr[i][prop]]) obj[arr[i][prop]] = arr[i];
      }
      var newArr = [];
      for ( var key in obj ) newArr.push(obj[key]);
      return newArr;
    }

    var patients = removeDuplicates(recommended_patients, '_id');
    
    return res.status(200).json({
      message: 'All Recommended Patients and Caregiver found!',
      caregiver,
      patients
      
    });
  }
  catch(err){
    return sendErr(res, err);
  }
};

const add = async (req, res, next) => {
  try {
    Caregiver.find({ email: req.body.email }).exec()
      .then((user) => {
        if (user.length >= 1) {
          return sendErr(res, user, 'caregiver Already exist', 401);
        }
        else {
          bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) {
              return sendErr(res, err, 'An error ocurred trying to create the password, please choose another password!', 401);
            }
            else {
              const caregiver_data = new Caregiver({
                email: req.body.email,
                full_name: req.body.full_name,
                password: hash
              });

              caregiver_data.save()
                .then((caregiver) => {
                  const token = jwt.sign({
                    email: caregiver.email,
                    _id: caregiver._id
                }, process.env.JWT_KEY, 
                {
                    expiresIn: "30 days"
                });
                  return res.status(200).json({
                    message: 'caregiver Created!',
                    caregiver: caregiver,
                    Token: token
                  });
                })
                .catch((err) => {
                  return sendErr(res, err);
                })
            }
          })
        }
      })

  }
  catch (err) {
    return sendErr(res, err);
  }
};

const send_proposal = async (req, res, next) => {
  try {
    const caregiver_id = req.params.caregiver_id;
    const body  = req.body;

    delete req.params.caregiver_id;

    const caregiver = await Caregiver.findOneAndUpdate({
      _id: caregiver_id
    }, {
      $addToSet: body
    }, {
      new: true
    });

    const caretaker = await Caretaker.findOneAndUpdate({
      _id: body.sent_proposals_to[0]._id
    },{
      $addToSet: {
        accept_proposals_of: {
          _id: caregiver._id
        }
      }
    },{
      new: true
    });

    return res.status(200).json({
      message: 'Proposal sent to caretaker!',
      caregiver,
      caretaker
    });
  } catch (err) {
    console.log(err)
    return sendErr(res, err);
    
  }
};

const match_caregiver = async (req, res, next) => {
  try {
    const caregiver_id = req.params.caregiver_id;
    const body  = req.body;

    delete req.params.caregiver_id;

    const caregiver = await Caregiver.findOneAndUpdate({
      _id: caregiver_id
    }, {
      $addToSet:{
        connections:{
        _id: ObjectId(body.connections[0]._id)
      }},
      $pull: {
        accept_proposals_of:{
          _id: ObjectId(body.connections[0]._id)
        },
        sent_proposals_to:{
          _id: ObjectId(body.connections[0]._id)
        }
      }
    }, {
      new: true
    });

    const caretaker = await Caretaker.findOneAndUpdate({
      _id: body.connections[0]._id
    },{
      $addToSet: {
        connections: {
          _id: caregiver._id
        }  
      },
      $pull:{  
        accept_proposals_of:{
          _id: caregiver_id
        },
        sent_proposals_to: {
          _id: caregiver_id
        }
      }
    }
       ,{
      new: true
    });

    return res.status(200).json({
      message: 'Caretaker Matched!',
      caregiver,
      caretaker
    });
  } catch (err) {
    console.log(err)
    return sendErr(res, err);
    
  }
};

const edit = async (req, res, next) => {
  try {
    const caregiver_id = req.body.caregiver_id;
    const body  = req.body;
   // const { f } = req

    delete req.body.caregiver_id;

    const caregiver = await Caregiver.findByIdAndUpdate({
      _id: caregiver_id
    }, {
      $set: body,
    //  files: f
    }, {
      new: true
    });

    return res.status(200).json({
      message: 'caregiver Profile updated!',
      caregiver
    });
  } catch (err) {
    return sendErr(res, err);
  }
};

const updateImage = async (req, res, next) => {
  try {
    const caregiver_id = req.body.caregiver_id;
    const { fileName } = req;

    const caregiver = await Caregiver.findByIdAndUpdate({
      _id: caregiver_id
    }, {
      profile_image: fileName
    }, {
      new: true
    });

    return res.status(200).json({
      message: 'Caregiver profile picture updated!',
      caregiver
    });
  } catch (err) {
    return sendErr(res, err);
  }
};

/*  =============
 *  -- EXPORTS --
 *  =============
 */

module.exports = {
  get,
  get_caregiver,
  get_recommendation,
  add,
  send_proposal,
  match_caregiver,
  edit,
  updateImage
};
