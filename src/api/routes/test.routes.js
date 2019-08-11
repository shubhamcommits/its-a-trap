const express = require('express');

const {
  test
} = require('../controllers');

const router = express.Router();

router.get('/', test.get);

module.exports = router;