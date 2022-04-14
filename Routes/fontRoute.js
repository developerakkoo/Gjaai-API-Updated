const express = require('express');

const fontController = require('../Controller/fontController');

const Router = express.Router();

Router.post('/font', fontController.postFont);
Router.get('/font/:id', fontController.getFontByInstitute);

module.exports = Router;