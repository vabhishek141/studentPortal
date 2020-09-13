const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors')


const studentRouter = require('./routers/student');
const { json } = require('express');

const url = 'mongodb://127.0.0.1:27017/student';

const app = express();

mongoose.connect(url,{useNewUrlParser: true});
const con = mongoose.connection;

con.on('open',() =>{
    console.log('connected...');
});
app.use(cors());
app.use(express.json());

app.use('/student',studentRouter);

app.listen(7000, () =>{
    console.log('server started')
})
