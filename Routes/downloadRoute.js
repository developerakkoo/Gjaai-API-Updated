const express = require("express");
const Router = express.Router();
const download = require("../Controller/downloadController");


//Router.get("/files", download.getListFiles);
Router.get("/files/folder", download.download);


module.exports = Router;