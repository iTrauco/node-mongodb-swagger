module.exports = {
    responseObject: {
        status: 500,
        message: 'Internal server error...',
        body: {}
    },
    databaseStatus: {
        ENTITY_CREATED: 'Entity Created...',
        ENTITY_MODIFIED: 'Entity Modified...',
        ENTITY_FETCHED: 'Entity Fetched...',
        ENTITY_DELETED: 'Entity Deleted...',
        DATABASE_CONNECTED: 'Successfully connected to MongoDB...',
        DATABASE_ERROR: 'Database error...'
    },
    controllerStatus: {
        BAD_REQUEST: 'Required fields are blank/missing...'
    },
    serviceStatus: {
        USER_CREATED_SUCCESSFULLY: 'User successfully created...'
    }
}