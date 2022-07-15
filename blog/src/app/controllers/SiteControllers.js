const Course = require('../models/Course')
const res = require('express/lib/response');
const {mutipleMongooseToObject} = require('../../util/mongo')
class SiteController {
  // GET home
  index(req, res,next)  {

  //  Course.find({},(err,courses,next)=> {
  //    if(!err) {
  //     res.json(courses); //! neu khoong loi thi tra ve du lieu
  //    }
  //    else
  //    {
  //     res.status(400).json({error:'ERROR!!!'})
  //    }
    
  //  });
    Course.find({})
    .then(courses=> {
     //! truyen du lieu courses qua trang home
      res.render('home',{
        courses:mutipleMongooseToObject(courses) //! lay ham su li du lieu o mutipleMongooseToObject
      });
    })
    .catch(next)
  }
  //get search
  search(req, res) {
    res.render('search');
  }
}
module.exports = new SiteController();
