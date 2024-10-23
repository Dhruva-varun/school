const express = require("express");
const router = express.Router();
const {
  postMarks,
  getMarksByRollNo,
  editMarks,
  deleteMarks,
} = require("../controllers/marksController");

router.post("/postMarks/:studentRollno", postMarks);
router.get("/getMarks/:studentRollno", getMarksByRollNo);
router.post("/edit/:studentRollno", editMarks);
router.delete("/deletemarks/:studentRollno", deleteMarks);


module.exports = router;
