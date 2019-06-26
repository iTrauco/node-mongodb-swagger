//////=========================================================================
//////=========================================================================
// LOAD EXPRESS | LOAD ROUTER
const express = require('express');
const router = express.Router();
// IMPORT USER CONTROLLER
const userController = require('../controller/user');
//
//////=========================================================================
//////=========================================================================
// CONFIGURE API ROUTES
router.post('/', userController.createUser);

//
//////=========================================================================
//////=========================================================================
// EXPORT MODULE
module.exports = router;

