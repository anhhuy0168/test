const Course = require('../models/Course')
const {mongooseToObject} = require('../../util/mongo')
class CoursesController {
  //! GET /COURSE/:SLUG
  show(req, res,next ) {
    Course.findOne({slug:req.params.slug})//! show ra du lieu
    .then(course=>
       res.render('courses/show',{course:mongooseToObject(course)})//! {Course} ĐỂ TRUYỀN DỮ LIỆU QUA VIEW CHÍNH LÀ SHOW.HBS
    )//! mongooseToObject là tại hbs bị lỗi
    .catch(next);
      
    
  }
  ////! GET /COURSE/CREATE
  create(req, res,next ){
    res.render('courses/create')
  }
  //!Post/COURSE/STORE
  store(req, res,next ){
    const formData = req.body
    formData.image=`https://img.youtube.com/vi/${req.body.videoID}/sddefault.jpg`
    const course = new Course(formData);
    course.save()
    .then(()=> res.redirect('/me/stored/courses'))
    .catch(next);
  }
  //! EDIT
  edit(req, res,next ){
    Course.findById(req.params.id)
    .then(course=>res.render('courses/edit',{
      course:mongooseToObject(course)
    }))
    .catch(next)
  }
  //!UPDATE
  update(req, res,next ){
   Course.updateOne({_id:req.params.id},req.body)
   .then(()=>res.redirect('/me/stored/courses'))
   .catch(next)
  }
  //! DELETE
  delete(req, res,next ){
    Course.delete({_id:req.params.id})
    .then(()=>res.redirect('back'))//quay tro lai trang truowc do
    .catch(next)
  }
  //! xoa vinh vien
  forceDelete(req, res,next ){
    Course.deleteOne({_id:req.params.id})
    .then(()=>res.redirect('back'))//quay tro lai trang truowc do
    .catch(next)
  }
  //! restore
  restore(req, res,next ){
    Course.restore({_id:req.params.id})
    .then(()=>res.redirect('back'))//quay tro lai trang truowc do
    .catch(next)
  }

}
module.exports = new CoursesController();
