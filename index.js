//////=========================================================================
//////=========================================================================
// LOAD EXPRESS
const express = require('express');
const app = express();
// LOAD BODY-PARSER
const bodyParser = require('body-parser');
// LOAD DOTENV
const dotEnv = require('dotenv').config();
// LOAD CORS
const cors = require('cors');
const crud = require('./database/crud');
// CONFIGURE APP
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); // 'extended' property allows for the passing of nested objects

crud.createConnection();

app.use(cors());
// PORT
const PORT = process.env.PORT || 3434;
//
//////=========================================================================
//////=========================================================================
// CONFIGURE ROUTES
app.use('/api/v1/user', require('./routes/user'));

// MAIN ENDPOINT
app.use('/', (req, res, next) => {
    res.send('Main endpoint...')
})
//
//////=========================================================================
//////=========================================================================
// INITIALIZE SERVER
app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}...`)
})

