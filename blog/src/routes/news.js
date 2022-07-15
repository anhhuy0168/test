var express = require('express');
const CourseController = require('../app/controllers/CourseController');
var route = express.Router();
const newsController = require('../app/controllers/NewsController');

//newsController.index

route.get('/:slug', newsController.show);
route.get('/', newsController.index);

module.exports = route;
