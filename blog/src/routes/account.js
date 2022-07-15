var express = require('express');
const AccountController = require('../app/controllers/AccountController');
var route = express.Router();

route.post('/userRegister', AccountController.userRegister);
route.post('/userLogin', AccountController.userLogin);
module.exports = route;