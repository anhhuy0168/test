const res = require('express/lib/response');

class NewsController {
  // !GET New
  index(req, res) {
    res.render('news');
  }
  //detail
  show(req, res) {
    res.send('new detail');
  }
}
module.exports = new NewsController();
