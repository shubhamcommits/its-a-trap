const { Manager } = require('../models');
const { sendErr } = require('../../utils');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { ObjectId } = require('mongodb'); 

/*  ======================
 *  -- MANAGERS CONTROLLERS --
 *  ======================
 */

// -| Manager main controllers |-

const get_all_managers = async (req, res, next) => {
  try {
    const manager = await Manager.find()
      .sort('-created_date')
      .lean();

    return res.status(200).json({
      message: 'All managers found!',
      manager
    });
  } catch (err) {
    return sendErr(res, err);
  }
};

const get_manager = async (req, res, next) => {
  try {
    const manager_id = req.body.manager_id;

    const manager =  await Manager.findById({
      _id: manager_id
    });

    return res.status(200).json({
      message: 'User found!',
      manager      
    });
  } catch (err) {
    return sendErr(res, err);
  }
};

const add_manager = async (req, res, next) => {
  try {
    Manager.find({ email: req.body.email }).exec()
      .then((manager) => {
        if (manager.length >= 1) {
          return sendErr(res, manager, 'Manager Already exist', 401);
        }
        else {
          bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) {
              return sendErr(res, err, 'An error ocurred trying to create the password, please choose another password!', 401);
            }
            else {
              const manager_data = new Manager({
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

              manager_data.save()
                .then((manager) => {
                  const token = jwt.sign({
                    email: manager.email,
                    _id: manager._id
                }, process.env.JWT_KEY, 
                {
                    expiresIn: "30 days"
                });
                  return res.status(200).json({
                    message: 'Manager Created!',
                    manager: manager,
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

const add_pending_mentor = async (req, res, next) => {
    try {
      const manager_id = req.body.manager_id;
      const mentor_id = req.body.mentor_id;

      const body = {
        pending_mentors: mentor_id
      }

      const manager = await Manager.findByIdAndUpdate({
        _id: manager_id
      }, {
        $push: body
      }, {
        new: true
      });
  
      return res.status(200).json({
        message: 'Manager Profile updated!',
        manager
      });
    } catch (err) {
      return sendErr(res, err);
    }
};

const add_pending_shg = async (req, res, next) => {
  try {
    const manager_id = req.body.manager_id;
    const shg_id = req.body.shg_id;

    const body = {
      pending_shg: shg_id
    }

    const manager = await Manager.findByIdAndUpdate({
      _id: manager_id
    }, {
      $push: body
    }, {
      new: true
    });

    return res.status(200).json({
      message: 'Manager Profile updated!',
      manager
    });
  } catch (err) {
    return sendErr(res, err);
  }
};

const approve_pending_mentor = async (req, res, next) => {
  try {
    const manager_id = req.body.manager_id;
    const mentor_id = req.body.mentor_id;

    const body1 = {
      pending_mentors: [mentor_id]
    }

    const body2 = {
      mentors: mentor_id
    }

    const manager = await Manager.findByIdAndUpdate({
      _id: manager_id
    }, {
      $pullAll: body1,
      $push: body2
    }, {
      new: true
    });

    return res.status(200).json({
      message: 'Manager Profile updated!',
      manager
    });
  } catch (err) {
    return sendErr(res, err);
  }
};

const approve_pending_shg = async (req, res, next) => {
  try {
    const manager_id = req.body.manager_id;
    const shg_id = req.body.shg_id;

    const body = {
      pending_shg: [shg_id]
    }

    const manager = await Manager.findByIdAndUpdate({
      _id: manager_id
    }, {
      $pullAll: body
    }, {
      new: true
    });

    return res.status(200).json({
      message: 'Manager Profile updated!',
      manager
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
  get_all_managers,
  get_manager,
  add_manager,
  add_pending_mentor,
  add_pending_shg,
  approve_pending_mentor,
  approve_pending_shg
};
