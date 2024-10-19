const Student = require('../models/student');

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
        const { id } = req.params; 
        const { name, parentname, dob, div } = req.body;

        const student = await Student.findOneAndUpdate(
            {  _id: id },  
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
