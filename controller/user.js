//////=========================================================================
//////=========================================================================
// LOAD DB CONSTANTS
const constants = require('../constants/constants');
//
//////=========================================================================
//////=========================================================================
// EXPORT MODULE
module.exports.createUser = (req, res, next) => {
    try{
        let responseObject = {};
        let data = req.body;
        console.log('req.body', req.body);
        // Service call w/ data

        // Service response
        let responseFromService = {
            status: constants.serviceStatus.USER_CREATED_SUCCESSFULLY,
            body: {
                id: '12345',
                name: 'Melinda Pinkerton',
                password: '*****',
                phone: '555-555-5555'
            }
        }
            switch(responseFromService.status) {
                case constants.serviceStatus.USER_CREATED_SUCCESSFULLY:
                    responseObject.status = 200
                    responseObject.message = constants.serviceStatus.USER_CREATED_SUCCESSFULLY
                    responseObject.body = responseFromService.body
                    break

                default: 
                    responseObject = constants.responseObject;
                    break
    }
    res.status(responseObject.status).send(responseObject);
    } catch(err) {
        console.log('Oops! Controller cannot \'create user\', something went wrong...', err);
        responseObject = constants.responseObject
        return res.status(responseObject.status).send(responseObject)
    }
}
