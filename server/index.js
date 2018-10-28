const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();
const controller = require('./controller');

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
}).catch(err => console.log(err));


app.post('/api/users/new', controller.createUser)
app.post('/api/users', controller.loginUser)
// app.get('/api/users', controller.getUser)

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})