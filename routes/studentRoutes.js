const express = require('express');
const {registerStudent,viewAllStudents,editStudent,deleteStudent } = require('../controllers/studentController');
const router = express.Router();


router.post('/register', registerStudent);

router.post('/edit/:rollno',editStudent);

router.get('/allstudents', viewAllStudents);

router.delete('/deletestudent/:rollno', deleteStudent);



module.exports = router;