const express = require('express');
const router = express.Router();
const Student = require('../models/student');

router.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    // res.json({students :students.map(student=> student.toObject({getters: true})) });
    res.json(students);
  } catch (error) {
    res.send('Error' + error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    res.json(student);
  } catch (error) {
    res.send('Error' + error);
  }
});

router.post('/', async (req, res) => {
  const student = new Student({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    class: req.body.class,
    birthDate: req.body.birthDate,
    address: req.body.address,
    contactNo: req.body.contactNo
  });

  try {
    await student.save();
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.send('Error');
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    // student.email = req.body.email;
    // student = {
    //   _id: req.params.id,
    //   name: req.body.name,
    //   email: req.body.email,
    //   gender: req.body.gender,
    //   class: req.body.class,
    //   birthDate: req.body.birthDate,
    //   address: req.body.address,
    //   contactNo: req.body.contactNo
    // };

    student.name = req.body.name;
    student.email = req.body.email;
    student.gender = req.body.gender;
    student.class = req.body.class;
    student.birthDate = req.body.birthDate;
    student.address = req.body.address;
    student.contactNo = req.body.contactNo;

    await student.save();
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.send('Error');
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    await student.delete();
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.send('Error');
  }
});

module.exports = router;
