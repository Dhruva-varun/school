const express = require('express');
const router = express.Router();
const { postMarks, getMarksByRollNo, editMarks } = require('../controllers/marksController');

router.post('/postMarks/:studentRollno', postMarks);
router.get('/getMarks/:studentRollno', getMarksByRollNo);
router.post('/edit/:studentRollno/:subject', editMarks); 

module.exports = router;