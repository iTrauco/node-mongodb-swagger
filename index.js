//////=========================================================================
//////=========================================================================
// MODULES
// LOAD EXPRESS
const express = require('express');
const app = express();
// LOAD BODY-PARSER
const bodyParser = require('body-parser');
// LOAD DOTENV
const dotEnv = require('dotenv').config();
// LOAD CORS
const cors = require('cors');
// LOAD CRUDREPO
const crudRepository = require('./database/crudRepository');
// CONFIGURE APP
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); // 'extended' property allows for the passing of nested objects

crudRepository.createConnection();

app.use(cors());
// PORT
const PORT = process.env.PORT || 3434;
//
////
//////=========================================================================
//////=========================================================================
// CONFIGURE ROUTES
//
app.use('/', (req, res, next) => {
    res.send('Main end point...');
})
//
////
//////=========================================================================
//////=========================================================================
// INITIALIZE SERVER
//
app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}...`)
})

