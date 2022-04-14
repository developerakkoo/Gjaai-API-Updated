const express = require('express');

const imageController = require('../Controller/ImageController');

const Router = express.Router();

Router.post('/image',imageController.postImage);
Router.get('/image/:id', imageController.getImageByInstitute);
Router.delete('/image/:id', imageController.deleteImageByInstitute);

module.exports = Router;