var express = require('express');
var route = express.Router();
const siteController = require('../app/controllers/SiteControllers');

// !newsController.index

route.get('/:slug', siteController.search);
route.get('/', siteController.index);

module.exports = route;
