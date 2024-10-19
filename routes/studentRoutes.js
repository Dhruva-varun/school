const express = require('express');
const {registerStudent,viewAllStudents,editStudent } = require('../controllers/studentController');
const router = express.Router();


router.post('/register', registerStudent);

router.post('/edit/:id',editStudent);

router.get('/allstudents', viewAllStudents);


module.exports = router;