const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    rollno: {
        type: String,
        required: true,
        unique: true,
    },
    parentname: {
        type: String,
        required: true,
    },
    dob: {
        type: Date,
        required :true,
    },
    div: {
        type: String,
        required :true,
    },
    marks: {
        type: Schema.Types.ObjectId,
        ref: 'marks',
    },
});

const student = mongoose.model('student', studentSchema);

module.exports = student;
