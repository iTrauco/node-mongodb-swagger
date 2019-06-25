//////=========================================================================
//////=========================================================================
// LOAD EXPRESS
const express = require('express');
const app = express();
// LOAD BODY-PARSER
const bodyParser = require('body-parser');
// CONFIGURE BODY-PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); // 'extended' property allows for the passing of nested objects

const PORT = 3333;

//////=========================================================================
//////=========================================================================
// CONFIGURE ROUTES
app.use('/', (req, res, next) => {
    res.send('Hello from the main/primary Node API endpoint...');
})


//////=========================================================================
//////=========================================================================
// CONFIGURE SERVER
app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}...`)
})

