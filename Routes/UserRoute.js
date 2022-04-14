const express = require('express');

const userController = require('../Controller/User');

const Router = express.Router();

Router.get('/user', userController.getAllUser);
Router.get('/user/:id', userController.getUser);

Router.post('/user', userController.postUser);
Router.post('/user/auth/login', userController.loginUser);
Router.put('/user', userController.putUser);

Router.delete('/user', userController.deleteUser);

module.exports = Router;