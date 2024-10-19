const express = require('express');
const app = express();
require('dotenv').config();
const studentRoutes= require("./routes/studentRoutes")
const marksRoutes = require("./routes/marksRoutes")
const cors = require('cors')

app.use(cors({
    origin: 'http://localhost:5000' //your frontend URL
  }));

const connectDB = require('./config/db');


app.use(express.json());
connectDB();

app.use('/student', studentRoutes);
app.use('/marks', marksRoutes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));