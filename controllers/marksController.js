const Marks = require('../models/marks');

exports.postMarks = async (req, res) => {
    try {
        const { studentRollno } = req.params; 
        const { language1, language2, mathematics, science, socialScience } = req.body;

        const marks = new Marks({
            studentRollno,
            language1,
            language2,
            mathematics,
            science,
            socialScience,
        });

        await marks.save();
        res.status(201).json({ message: 'Marks recorded successfully', marks });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getMarksByRollNo = async (req, res) => {
    try {
        const { studentRollno } = req.params; 
        const marks = await Marks.findOne({ studentRollno });

        if (!marks) {
            return res.status(404).send('Marks not found for the given roll number');
        }

        res.status(200).json(marks);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.editMarks = async (req, res) => {
    try {
        const { studentRollno, subject } = req.params; 
        const updates = req.body;

        const marks = await Marks.findOneAndUpdate(
            { studentRollno },
            { $set: { [subject]: updates } },
            { new: true, runValidators: true }
        );

        if (!marks) {
            return res.status(404).send('Marks not found for the given roll number');
        }

        res.status(200).json({ message: 'Marks updated successfully', marks });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};