//////=========================================================================
//////=========================================================================
// LOAD EXPRESS | LOAD ROUTER
const express = require('express');
const router = express.Router();
//
//////=========================================================================
//////=========================================================================
// CONFIGURE API ROUTES
router.post('/', (req, res, next) => {
    res.send('User successfully created...');
})
//
//////=========================================================================
//////=========================================================================
// EXPORT MODULE
module.exports = router;

