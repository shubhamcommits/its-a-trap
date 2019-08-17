const { User, Mentor, Manager, SHG  } = require('../models');
const { sendErr } = require('../../utils');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login_user = async (req, res, next) => {

    try {
        const user = await User.findOne({ email: req.body.email }).exec();
        if(!user){
            return sendErr(res, '', 'Error! User not found, invalid id or unauthorized request', 404);
        }
        const check_pass = await bcrypt.compare(req.body.password, user.password, (err, result)=>{
            if(err){
                return sendErr(res, '', 'Error! Incorrect password, please try again', 404);
            }
            if(result){
                const token = jwt.sign({
                    email: user.email,
                    _id: user._id
                }, process.env.JWT_KEY, 
                {
                    expiresIn: "30 days"
                });
                return res.status(200).json({
                    message: `User found!`,
                    token: token,
                    user: user
                  })
            }
            return sendErr(res, '', 'Authentication error, please try again!', 404);
        });
    }

    catch (err) {
        return sendErr(res, err);
    }
};

const login_mentor = async (req, res, next) => {

    try {
        const mentor = await Mentor.findOne({ email: req.body.email }).exec();
        if(!mentor){
            return sendErr(res, '', 'Error! Mentor not found, invalid id or unauthorized request', 404);
        }
        const check_pass = await bcrypt.compare(req.body.password, mentor.password, (err, result)=>{
            if(err){
                return sendErr(res, '', 'Error! Incorrect password, please try again', 404);
            }
            if(result){
                const token = jwt.sign({
                    email: mentor.email,
                    _id: mentor._id
                }, process.env.JWT_KEY, 
                {
                    expiresIn: "30 days"
                });
                return res.status(200).json({
                    message: `Mentor found!`,
                    token: token,
                    mentor: mentor
                  })
            }
            return sendErr(res, '', 'Authentication error, please try again!', 404);
        });
    }

    catch (err) {
        return sendErr(res, err);
    }
};

const login_manager = async (req, res, next) => {

    try {
        const manager = await Manager.findOne({ email: req.body.email }).exec();
        if(!manager){
            return sendErr(res, '', 'Error! Manager not found, invalid id or unauthorized request', 404);
        }
        const check_pass = await bcrypt.compare(req.body.password, manager.password, (err, result)=>{
            if(err){
                return sendErr(res, '', 'Error! Incorrect password, please try again', 404);
            }
            if(result){
                const token = jwt.sign({
                    email: manager.email,
                    _id: manager._id
                }, process.env.JWT_KEY, 
                {
                    expiresIn: "30 days"
                });
                return res.status(200).json({
                    message: `Manager found!`,
                    token: token,
                    manager: manager
                  })
            }
            return sendErr(res, '', 'Authentication error, please try again!', 404);
        });
    }

    catch (err) {
        return sendErr(res, err);
    }
};

/*  =============
 *  -- EXPORTS --
 *  =============
 */

module.exports = {
    login_user,
    login_mentor,
    login_manager
};

