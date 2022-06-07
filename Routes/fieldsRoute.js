const express = require('express');

const field = require('../Controller/fieldsController');

const Router = express.Router();

Router.post('/field', field.postField);
Router.get('/field/:id', field.getFieldByInstitute);

module.exports = Router;