const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const marksSchema = new Schema({
    studentRollno: {
        type: String,
        required: true,
        ref: 'student', 
    },
    language1: {
        test1: {
            type: Number,
            required: true,
        },
        test2: {
            type: Number,
            required: true,
        },
        midExam: {
            type: Number,
            required: true,
        },
        total: {
            type: Number,
            default: 0,
        },
        percentage: {
            type: Number,
            default: 0,
        },
        avg: {
            type: Number,
            default: 0,
        },
        grade: {
            type: String,
            required: true,
        },
    },
    language2: {
        test1: {
            type: Number,
            required: true,
        },
        test2: {
            type: Number,
            required: true,
        },
        midExam: {
            type: Number,
            required: true,
        },
        total: {
            type: Number,
            default: 0,
        },
        percentage: {
            type: Number,
            default: 0,
        },
        avg: {
            type: Number,
            default: 0,
        },
        grade: {
            type: String,
            required: true,
        },
    },
    mathematics: {
        test1: {
            type: Number,
            required: true,
        },
        test2: {
            type: Number,
            required: true,
        },
        midExam: {
            type: Number,
            required: true,
        },
        total: {
            type: Number,
            default: 0,
        },
        percentage: {
            type: Number,
            default: 0,
        },
        avg: {
            type: Number,
            default: 0,
        },
        grade: {
            type: String,
            required: true,
        },
    },
    science: {
        test1: {
            type: Number,
            required: true,
        },
        test2: {
            type: Number,
            required: true,
        },
        midExam: {
            type: Number,
            required: true,
        },
        total: {
            type: Number,
            default: 0,
        },
        percentage: {
            type: Number,
            default: 0,
        },
        avg: {
            type: Number,
            default: 0,
        },
        grade: {
            type: String,
            required: true,
        },
    },
    socialScience: {
        test1: {
            type: Number,
            required: true,
        },
        test2: {
            type: Number,
            required: true,
        },
        midExam: {
            type: Number,
            required: true,
        },
        total: {
            type: Number,
            default: 0,
        },
        percentage: {
            type: Number,
            default: 0,
        },
        avg: {
            type: Number,
            default: 0,
        },
        grade: {
            type: String,
            required: true,
        },
    },
});

const Marks = mongoose.model('marks', marksSchema);

module.exports = Marks;
