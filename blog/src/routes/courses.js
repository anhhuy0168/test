var express = require('express');
const CourseController = require('../app/controllers/CourseController');
var route = express.Router();


//newsController.index
route.get('/create', CourseController.create);
route.post('/store', CourseController.store);
route.get('/:id/edit', CourseController.edit);
route.put('/:id', CourseController.update);
route.patch('/:id/restore', CourseController.restore);
route.delete('/:id/force', CourseController.forceDelete);
route.delete('/:id', CourseController.delete);
route.get('/:slug', CourseController.show);//! du lieu se qua file nay va lao thang vao controller voi phuong thuc show
module.exports = route;
