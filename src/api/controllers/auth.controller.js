const { Caretaker } = require('../models');
const { sendErr } = require('../../utils');
const { Caregiver } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login_caretaker = async (req, res, next) => {

    try {
        const caretaker = await Caretaker.findOne({ email: req.body.email }).exec();
        if(!caretaker){
            return sendErr(res, '', 'Error! Caretaker not found, invalid id or unauthorized request', 404);
        }
        const check_pass = await bcrypt.compare(req.body.password, caretaker.password, (err, result)=>{
            if(err){
                return sendErr(res, '', 'Error! Incorrect password, please try again', 404);
            }
            if(result){
                const token = jwt.sign({
                    email: caretaker.email,
                    _id: caretaker._id
                }, process.env.JWT_KEY, 
                {
                    expiresIn: "30 days"
                });
                return res.status(200).json({
                    message: `Caretaker found!`,
                    token: token,
                    caretaker: caretaker
                  })
            }
            return sendErr(res, '', 'Authentication error, please try again!', 404);
        });
    }

    catch (err) {
        return sendErr(res, err);
    }
};

const login_caregiver = async (req, res, next) => {

    try {
        const caregiver = await Caregiver.findOne({ email: req.body.email }).exec();
        if(!caregiver){
            return sendErr(res, '', 'Error! caregiver not found, invalid id or unauthorized request', 404);
        }
        const check_pass = await bcrypt.compare(req.body.password, caregiver.password, (err, result)=>{
            if(err){
                return sendErr(res, '', 'Error! Incorrect password, please try again', 404);
            }
            if(result){
                const token = jwt.sign({
                    email: caregiver.email,
                    _id: caregiver._id
                }, process.env.JWT_KEY, 
                {
                    expiresIn: "30 days"
                });
                return res.status(200).json({
                    message: `Caregiver found!`,
                    token: token,
                    caregiver: caregiver
                  })
            }
            return sendErr(res, '', 'Internal Server error occured!', 404);
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
    login_caretaker,
    login_caregiver
};

