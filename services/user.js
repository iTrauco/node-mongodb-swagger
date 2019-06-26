//////=========================================================================
//////=========================================================================
// LOAD DB CONSTANTS
const constants = require('../constants/constants');
// LOAD MODEL
const User = require('../models/db/user');
// LOAD 'CRUD' DB
const crud = require('../database/crud');
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
        // Pass user model as data 
        let data = {
            model: user
        };
        // Pass data to DB 'crud'
        let responseFromDB = await crud.insertData(data);
        switch(responseFromDB.status) {
            case constants.databaseStatus.ENTITY_CREATED:
                // If successful
                responseObject.body = responseFromDB.result;
                responseObject.status = constants.serviceStatus.USER_CREATED_SUCCESSFULLY;
                break

            // If error
            default:
                responseObject = constants.responseObject;
                break
        }
        return responseObject

    } catch(err) {
        console.log('Oops! A breaking error occured... : Service : create user', err);
        return responseObject = constants.responseObject
    }
}