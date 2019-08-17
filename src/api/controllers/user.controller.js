const { User } = require('../models');
const { sendErr } = require('../../utils');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { ObjectId } = require('mongodb'); 

/*  ======================
 *  -- CAREGIVERS CONTROLLERS --
 *  ======================
 */

// -| Caregiver main controllers |-

const get_all_users = async (req, res, next) => {
  try {
    const user = await User.find()
      .sort('-created_date')
      .lean();

    return res.status(200).json({
      message: 'All users found!',
      user
    });
  } catch (err) {
    return sendErr(res, err);
  }
};

const get_user = async (req, res, next) => {
  try {
    const user_id = req.body.user_id;

    const user =  await User.findById({
      _id: user_id
    });

    return res.status(200).json({
      message: 'User found!',
      user      
    });
  } catch (err) {
    return sendErr(res, err);
  }
};

const add_user = async (req, res, next) => {
  try {
    User.find({ email: req.body.email }).exec()
      .then((user) => {
        if (user.length >= 1) {
          return sendErr(res, user, 'User Already exist', 401);
        }
        else {
          bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) {
              return sendErr(res, err, 'An error ocurred trying to create the password, please choose another password!', 401);
            }
            else {
              const user_data = new User({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: hash,
                age: req.body.age,
                sex: req.body.sex,
                address: req.body.address,
                country: req.body.country,
                phone_number: req.body.phone_number
              });

              user_data.save()
                .then((user) => {
                  const token = jwt.sign({
                    email: user.email,
                    _id: user._id
                }, process.env.JWT_KEY, 
                {
                    expiresIn: "30 days"
                });
                  return res.status(200).json({
                    message: 'User Created!',
                    user: user,
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

const add_mentor = async (req, res, next) => {
  try {
    const mentor_id = req.body.mentor_id;
    const user_id = req.body.user_id;

    const body = {
      mentor: mentor_id
    }

    const user = await User.findByIdAndUpdate({
      _id: user_id
    }, {
      $set: body
    }, {
      new: true
    });

    return res.status(200).json({
      message: 'Mentor Profile updated!',
      user
    });
  } catch (err) {
    return sendErr(res, err);
  }
};

const add_manager = async (req, res, next) => {
  try {
    const manager_id = req.body.manager_id;
    const user_id = req.body.user_id;

    const body = {
      manager: manager_id
    }

    const user = await User.findByIdAndUpdate({
      _id: user_id
    }, {
      $set: body
    }, {
      new: true
    });

    return res.status(200).json({
      message: 'Mentor Profile updated!',
      user
    });
  } catch (err) {
    return sendErr(res, err);
  }
};

const join_shg = async (req, res, next) => {
  try {
    const shg_id = req.body.shg_id;
    const user_id = req.body.user_id;

    const body = {
      shg: shg_id
    }

    const user = await User.findByIdAndUpdate({
      _id: user_id
    }, {
      $set: body
    }, {
      new: true
    });

    return res.status(200).json({
      message: 'Mentor Profile updated!',
      user
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
  get_all_users,
  get_user,
  add_user,
  add_mentor,
  add_manager,
  join_shg
};
