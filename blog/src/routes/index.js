const newRouter = require('./news');
const meRouter = require('./me');
const coursesRouter = require('./courses');
const siteRouter = require('./site');
const Account = require('./account')

function route(app) { //! day la duong dan dau tien de phan biet se di den dau(khong quan tron)
  app.use('/news', newRouter);
  app.use('/me', meRouter);
  app.use('/user', Account)
  app.use('/courses', coursesRouter); //! du lieu trne duong dan trang web dau tien se vao day va den coursesRouter
  app.use('/', siteRouter);
}
module.exports = route;
