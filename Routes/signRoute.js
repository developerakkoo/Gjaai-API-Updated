const express = require('express');

const signController = require('../Controller/SignController');

const Router = express.Router();

Router.post('/sign',signController.createSign);
Router.get('/sign/:id', signController.getSignByInstitute);
Router.delete('/sign/:id', signController.deleteSignByInstitute);

module.exports = Router;