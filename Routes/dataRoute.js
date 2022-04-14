const express = require('express');

const dataController = require('../Controller/DataController');

const Router = express.Router();

Router.post('/data', dataController.postData);
Router.get('/data/:id/:index', dataController.getDataById);

module.exports = Router;