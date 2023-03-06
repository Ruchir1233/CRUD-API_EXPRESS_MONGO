const express = require('express');
const bodyParser = require('body-parser');
const UserRoute = require('./routes/User')


const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())
app.use('/user',UserRoute)
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Databse Connected Successfully!!");    
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});
// const uri = "mongodb+srv://ruchir:ruchir@cluster0.pmpbcvg.mongodb.net/?retryWrites=true&w=majority&ssl=true";
// mongoose.connect(uri,{useUnifiedTopology:true,useNewUrlParser:true},()=>console.log("connected successfully"));

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

// Create a student json file which contains the record of student like student id
// student name,student marks and contact Number
// create a route students which perform following action
//1 display all the record of students having marks greater than 20
//2Search the student based on student id