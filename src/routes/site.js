const express = require('express');
const newsRouter = express.Router();

const siteController = require('../app/controllers/SiteController');
newsRouter.use('/search', siteController.search);
newsRouter.use('/', siteController.index);

module.exports = newsRouter;