const { Mentor } = require('../models');
const { sendErr } = require('../../utils');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { ObjectId } = require('mongodb'); 

/*  ======================
 *  -- MENTORS CONTROLLERS --
 *  ======================
 */

// -| Mentor main controllers |-

const get_all_mentors = async (req, res, next) => {
  try {
    const mentor = await Mentor.find()
      .sort('-created_date')
      .lean();

    return res.status(200).json({
      message: 'All mentors found!',
      mentor
    });
  } catch (err) {
    return sendErr(res, err);
  }
};

const get_mentor = async (req, res, next) => {
  try {
    const mentor_id = req.body.mentor_id;

    const mentor =  await Mentor.findById({
      _id: mentor_id
    });

    return res.status(200).json({
      message: 'User found!',
      mentor      
    });
  } catch (err) {
    return sendErr(res, err);
  }
};

const add_mentor = async (req, res, next) => {
  try {
    Mentor.find({ email: req.body.email }).exec()
      .then((mentor) => {
        if (mentor.length >= 1) {
          return sendErr(res, mentor, 'Mentor Already exist', 401);
        }
        else {
          bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) {
              return sendErr(res, err, 'An error ocurred trying to create the password, please choose another password!', 401);
            }
            else {
              const mentor_data = new Mentor({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: hash,
                age: req.body.age,
                sex: req.body.sex,
                address: req.body.address,
                country: req.body.country,
                phone_number: req.body.phone_number,
                about: req.body.about
              });

              mentor_data.save()
                .then((mentor) => {
                  const token = jwt.sign({
                    email: mentor.email,
                    _id: mentor._id
                }, process.env.JWT_KEY, 
                {
                    expiresIn: "30 days"
                });
                  return res.status(200).json({
                    message: 'Mentor Created!',
                    mentor: mentor,
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

const add_manager = async (req, res, next) => {
    try {
      const mentor_id = req.body.mentor_id;
      const manager_id = req.body.manager_id;

      const body = {
        manager: manager_id,
        has_manager: true
      }

      const mentor = await Mentor.findByIdAndUpdate({
        _id: mentor_id
      }, {
        $set: body
      }, {
        new: true
      });
  
      return res.status(200).json({
        message: 'Mentor Profile updated!',
        mentor
      });
    } catch (err) {
      return sendErr(res, err);
    }
};

const add_shg = async (req, res, next) => {
    try {
      const mentor_id = req.body.mentor_id;
      const shg_id = req.body.shg_id;

      const body = {
        shg: shg_id
      }

      const mentor = await Mentor.findByIdAndUpdate({
        _id: mentor_id
      }, {
        $set: body
      }, {
        new: true
      });
  
      return res.status(200).json({
        message: 'Mentor Profile updated!',
        mentor
      });
    } catch (err) {
      return sendErr(res, err);
    }
};

const add_mentee = async (req, res, next) => {
    try {
      const mentor_id = req.body.mentor_id;
      const user_id = req.body.user_id;

      const body = {
        mentees: user_id
      }

      const mentor = await Mentor.findByIdAndUpdate({
        _id: mentor_id
      }, {
        $push: body
      }, {
        new: true
      });
  
      return res.status(200).json({
        message: 'Mentor Profile updated!',
        mentor
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
  get_all_mentors,
  get_mentor,
  add_mentor,
  add_manager,
  add_shg,
  add_mentee
};
