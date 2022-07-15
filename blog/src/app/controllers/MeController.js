const Course = require('../models/Course')
const res = require('express/lib/response');
const {mutipleMongooseToObject} = require('../../util/mongo')
class MeController {
 // GET /me/stored/courses
  storedCourses(req, res,next) {
      Course.find({}) //! dieu kien delete = null moi duoc in ra
      .then(course=> res.render('me/stored-courses',{
          course:mutipleMongooseToObject(course)
      }))
    .catch(next)
  }
  // GET TRASH COURSE
  trashCourses(req, res,next){
    Course.findDeleted({}) //! dieu kien delete = null moi duoc in ra
    .then(course=> res.render('me/trash-courses',{
        course:mutipleMongooseToObject(course)
    }))
  }
}
module.exports = new MeController();
