//////=========================================================================
//////=========================================================================
// LOAD MONGOOSE
const mongoose = require('mongoose');
// LOAD DB CONSTANTS
const constants = require('../constants/constants');
//
//////=========================================================================
//////=========================================================================
// CONFIGURE CONNECTION TO MONGODB
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
//////=========================================================================
//////=========================================================================
// EXPORT MODULE
module.exports.insertData = (data) => {
    return new Promise((resolve, reject) => {
        try {
            // Save data from model
            data.model.save().then(docs => {
                // Success
                resolve({
                    result: docs,
                    status: constants.databaseStatus.ENTITY_CREATED
                })
            }).catch(err => {
                // In case of error...
                reject({
                    error: err.message, 
                    status: constants.databaseStatus.DATABASE_ERROR
                })
            })

        } catch(err) {
            console.log('Oops! Something went wrong : CRUD: insert data', err)
        }
    })
}
