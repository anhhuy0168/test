var express = require('express');
const MeController = require('../app/controllers/MeController');
var route = express.Router();
const newsController = require('../app/controllers/CourseController');

//newsController.index
route.get('/stored/courses', MeController.storedCourses);
route.get('/trash/courses', MeController.trashCourses);




module.exports = route;
