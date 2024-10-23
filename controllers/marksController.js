const Marks = require("../models/marks");

exports.postMarks = async (req, res) => {
  try {
    const { studentRollno } = req.params;
    const { language1, language2, mathematics, science, socialScience } =
      req.body;

    const marks = new Marks({
      studentRollno,
      language1,
      language2,
      mathematics,
      science,
      socialScience,
    });

    await marks.save();
    res.status(201).json({ message: "Marks recorded successfully", marks });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.getMarksByRollNo = async (req, res) => {
  try {
    const { studentRollno } = req.params;
    const marks = await Marks.findOne({ studentRollno });

    if (!marks) {
      return res.status(404).send("Marks not found for the given roll number");
    }

    res.status(200).json(marks);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.editMarks = async (req, res) => {
  try {
    const { studentRollno } = req.params;
    const { language1, language2, mathematics, science, socialScience } =
      req.body;

    const marks = await Marks.findOneAndUpdate(
      { studentRollno },
      {
        $set: {
          language1,
          language2,
          mathematics,
          science,
          socialScience,
        },
      },
      { new: true, runValidators: true }
    );

    if (!marks) {
      return res.status(404).send("Marks not found for the given roll number");
    }

    res.status(200).json({ message: "Marks updated successfully", marks });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};


exports.deleteMarks = async (req, res) => {
  try {
    const { studentRollno } = req.params;

    const marks = await Marks.findOneAndDelete({ studentRollno });

    if (!marks) {
      return res.status(404).json({ message: 'Marks not found for the student' });
    }

    res.status(200).json({ message: 'Marks deleted successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server error' });
  }
};
