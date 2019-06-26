//////=========================================================================
//////=========================================================================
// LOAD DB CONSTANTS
const constants = require('../constants/constants');
// LOAD SERVICE
const userService = require('../services/user');
//
//////=========================================================================
//////=========================================================================
// EXPORT MODULE
module.exports.createUser = async (req, res, next) => {
    let responseObject = {};
    
    try{
        let data = req.body;
        console.log('req.body', req.body);

        // Service call w/ data
        let responseFromService = await userService.createUser(data) // Returns promise

        // If user is created successfully, return '200' status code w/ 'User successfully created...' response
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
