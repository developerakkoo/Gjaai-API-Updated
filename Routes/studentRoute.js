const express = require('express');
const multer = require("multer");
const fs = require("fs-extra");
const StudentController = require('../Controller/StudentController');
const router = express.Router();

const diskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log("desntnation");

        console.log(req.file);
      cb(null, "image");
    },
  
    filename: (req, file, cb) => {
        console.log("filename");
        console.log(file);

      cb(null, Date.now() + file.originalname.replace(/\\/g, "/"));
    },
  });
  const upload = multer({ storage: diskStorage , limits: { fieldSize: 10 * 1024 * 1024 }});
  

router.post('/students', StudentController.createStudent);
router.get('/students', StudentController.getAllStudent);
router.get('/students/:id', StudentController.getStudentById);
router.get('/students/institute/:id', StudentController.getStudentByInstituteId);
router.get('/students/:udise/:password/:isIdUploaded', StudentController.getStudentByTeacher);

router.put('/students/:id', StudentController.updateStudent);
router.put('/student/image/:id',upload.single('pic'), StudentController.updateStudentPhoto);
router.delete('/students/:id', StudentController.deleteStudent);


module.exports = router;