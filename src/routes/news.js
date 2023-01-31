const express = require('express');
const newsRouter = express.Router();

const newsController = require('../app/controllers/NewsController');
newsRouter.use('/', newsController.index);

module.exports = newsRouter;
