//////=========================================================================
//////=========================================================================
// LOAD DB CONSTANTS
const constants = require('../constants/constants');
// LOAD MODEL
const User = require('../models/db/user');
//
//////=========================================================================
//////=========================================================================
// EXPORT MODEL
module.exports.createUser = async (serviceData) => {

    let responseObject = {};

    try {
        const user = new User({
            name: serviceData.name,
            password: serviceData.password,
            phone: serviceData.phone
        })



    } catch(err) {



    }
}