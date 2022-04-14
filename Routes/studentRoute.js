const express = require('express');

const StudentController = require('../Controller/StudentController');
const router = express.Router();

router.post('/students', StudentController.createStudent);
router.get('/students', StudentController.getAllStudent);
router.get('/students/:id', StudentController.getStudentById);

router.put('/students/:id', StudentController.updateStudent);
router.delete('/students/:id', StudentController.deleteStudent);


module.exports = router;