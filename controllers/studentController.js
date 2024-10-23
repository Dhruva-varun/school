const Student = require('../models/student');
const Marks = require("../models/marks");

exports.registerStudent = async (req, res) => {
    try {
        const { name, rollno, parentname,dob,div } = req.body;

        let student = await Student.findOne({ rollno });
        if (student) return res.status(400).send('Student already exists');

        student = new Student({
            name,
            rollno, 
            parentname,
            dob,
            div
        });

        await student.save();

        res.status(201).send('Student registered successfully');
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.viewAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.editStudent = async (req, res) => {
    try {
        const { rollno } = req.params; 
        const { name, parentname, dob, div } = req.body;

        const student = await Student.findOneAndUpdate(
            { rollno },  
            { $set: { name, parentname, dob, div } },  
            { new: true, runValidators: true }  
        );

        if (!student) {
            return res.status(404).send('Student not found');
        }

        res.status(200).json({ message: 'Student details updated successfully', student });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.deleteStudent = async (req, res) => {
    try {
        const { rollno } = req.params;
    
        const student = await Student.findOneAndDelete({ rollno });
    
        if (!student) {
          return res.status(404).json({ message: 'Student not found' });
        }

        await Marks.deleteMany({ studentRollno: rollno });
    
        res.status(200).json({ message: 'Student and associated marks deleted successfully' });
      } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server error' });
      }
    };