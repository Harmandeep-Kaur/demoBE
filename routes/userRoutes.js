var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController.js');
var apiGuard = require('../middleware/api-guard');
var validator = require('../middleware/validator');


/*
 * POST
 */
router.post('/createProfile', validator.validate('createProfile'), userController.createProfile);


module.exports = router;


