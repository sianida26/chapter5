const express     = require('express');
require('dotenv').config();
const app         = express();
var index         = require('./service/index');
var login         = require('./service/login');
var userPost      = require('./service/userPost');
var userGet       = require('./service/userGet');
var userPut       = require('./service/userPut');
var userDelete    = require('./service/userDelete');
var chekUser      = require('./middleware/chekUser');
app.use(express.json());
app.get('/', index)
app.post('/user', userPost)
app.get('/user', userGet)
app.put('/user', userPut)
app.delete('/user/:id', userDelete)
app.get('/login', login)
app.listen(process.env.PORT_API, () => {
  console.log(`Example app listening on port ${process.env.PORT_API}`)
})