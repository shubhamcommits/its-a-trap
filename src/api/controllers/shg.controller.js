const { SHG } = require('../models');
const { sendErr } = require('../../utils');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { ObjectId } = require('mongodb'); 

/*  ======================
 *  -- SHGS CONTROLLERS --
 *  ======================
 */

// -| SHG main controllers |-

const get_all_shgs = async (req, res, next) => {
  try {
    const shg = await SHG.find()
      .sort('-created_date')
      .lean();

    return res.status(200).json({
      message: 'All shg found!',
      shg
    });
  } catch (err) {
    return sendErr(res, err);
  }
};

const get_shg = async (req, res, next) => {
  try {
    const shg_id = req.body.shg_id;

    const shg =  await SHG.findById({
      _id: shg_id
    });

    return res.status(200).json({
      message: 'SHG found!',
      shg      
    });
  } catch (err) {
    return sendErr(res, err);
  }
};

const add_shg = async (req, res, next) => {
  try {
    SHG.find({ name: req.body.name }).exec()
      .then((shg) => {
        if (shg.length >= 1) {
          return sendErr(res, shg, 'SHG Already exist', 401);
        }
        else {
            const shg_data = new SHG({
                name: req.body.name,
                address: req.body.address,
                country: req.body.country,
                mentor: req.body.mentor_id,
                manager: req.body.manager_id
              });

            shg_data.save()
            .then((shg) => {
                const token = jwt.sign({
                name: shg.name,
                _id: shg._id
            }, process.env.JWT_KEY, 
            {
                expiresIn: "30 days"
            });
                return res.status(200).json({
                message: 'SHG Created!',
                shg: shg,
                Token: token
                });
            })
            .catch((err) => {
                return sendErr(res, err);
            })
        }
      })

  }
  catch (err) {
    return sendErr(res, err);
  }
};

const add_mentee = async (req, res, next) => {
    try {
      const shg_id = req.body.shg_id;
      const user_id = req.body.user_id;

      const body = {
        mentees: user_id
      }

      const shg = await SHG.findByIdAndUpdate({
        _id: shg_id
      }, {
        $push: body
      }, {
        new: true
      });
  
      return res.status(200).json({
        message: 'SHG Profile updated!',
        shg
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
  get_all_shgs,
  get_shg,
  add_shg,
  add_mentee
};
