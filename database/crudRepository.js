//////=========================================================================
//////=========================================================================
// LOAD MONGOOSE
const mongoose = require('mongoose');
// LOAD CONSTANTS
const constants = require('../constants/constants');
//
//
//////=========================================================================
//////=========================================================================
// CONFIGURE CONNECTION TO MONGODB
//
module.exports.createConnection = () => {
    return new Promise((resolve, reject) => {
        let responseObj = {}
            mongoose.connect(process.env.DB_URL, 
                { 
                    useNewUrlParser: true
                }, (err) => {
                    if(err) {
                        responseObj.status = constants.databaseStatus.DATABASE_ERROR
                        console.log('responseObj', responseObj);
                        return reject(responseObj);
                    } else  {
                        responseObj.status = constants.databaseStatus.DATABASE_CONNECTED
                        console.log('responseObj', responseObj);
                        return resolve(responseObj);
                    }
            })
        })
}