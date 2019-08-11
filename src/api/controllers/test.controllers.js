const { Test } = require('../models');
const { sendErr } = require('../../utils');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { ObjectId } = require('mongodb'); 

/*  ======================
 *  -- TEST CONTROLLERS --
 *  ======================
 */

// -| Test main controllers |-

const get = async (req, res, next) => {
  try {
    const tests =  await Test.find()
    .lean();

    return res.status(200).json({
      message: 'Get request tested!',
      tests
      
    });
  } catch (err) {
    return sendErr(res, err);
  }
};

module.exports = {
    get
};