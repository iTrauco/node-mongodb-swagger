//////=========================================================================
//////=========================================================================
// LOAD MONGOOSE
const mongoose = require('mongoose');
// LOAD DB CONSTANTS
const constants = require('../constants/constants');
//
//
//////=========================================================================
//////=========================================================================
// CONFIGURE CONNECTION TO MONGODB
//
module.exports.createConnection = () => {
    return new Promise((resolve, reject) => {
        let responseObject = {}
            mongoose.connect(process.env.DB_URL, 
                { 
                    useNewUrlParser: true
                }, (err) => {
                    if(err) {
                        responseObject.status = constants.databaseStatus.DATABASE_ERROR
                        console.log('responseObject', responseObject);
                        return reject(responseObject);
                    } else  {
                        responseObject.status = constants.databaseStatus.DATABASE_CONNECTED
                        console.log('responseObject', responseObject);
                        return resolve(responseObject);
                    }
            })
        })
}