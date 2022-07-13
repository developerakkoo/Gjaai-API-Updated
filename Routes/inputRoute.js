const express = require('express');

const input = require('../Controller/inputController')
const Router = express.Router();


Router.post('/input/',  input.postInstitute);

Router.get('/input',input.getInstitute );
Router.get('/input/:id', input.getInstituteById);
Router.get('/get/input/:id', input.getInputByInstituteId);

Router.put('/input/:id', input.updateInstitute);
Router.delete('/inputs/:id', input.deleteInput);

module.exports = Router;