const express = require("express");

const institute = require("../Controller/instituteControler");
const Router = express.Router();
const multer = require("multer");
const fs = require("fs-extra");

const diskStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(req.body.Name);
    let date = new Date().toISOString().slice(0, 10);
    let name = req.body.Name;
    let path = `image/${date}/${name}`;
    fs.mkdirsSync(path);
    cb(null, path);
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname.replace(/\\/g, "/"));
  },
});
const upload = multer({ storage: diskStorage });

Router.post("/institute", upload.array("file"), institute.postInstitute);

Router.get(
  "/get/institute/:udise/:mobile",
  institute.getInstituteByUdiseAndMobile
);

Router.post(
  "/teacher/login",
  institute.getTeacherByUdiseAndMobile
);
Router.get("/institute", institute.getInstitute);
Router.get("/institute/:id", institute.getInstituteById);

Router.delete("/institute/:id", institute.deleteInstitute);
module.exports = Router;
