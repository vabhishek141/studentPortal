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
    emailId: req.body.emailId,
    contactNo: req.body.contactNo
  });

  try {
    const students = await student.save();
    res.json(students);
  } catch (error) {
    res.send('Error');
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    student.email = req.body.email;
    const stu = await student.save();
    res.json(stu);
  } catch (error) {
    res.send('Error');
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    const stu = await student.delete();
    res.json(stu);
  } catch (error) {
    res.send('Error');
  }
});

module.exports = router;
