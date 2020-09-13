const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    gender: { type: String, required: true },
    class: { type: String, required: true },
    birthDate: { type: String, required: true },
    address: { type: String, required: true },
    emailId: { type: String, required: true },
    contactNo: { type: String, required: true }
  },
  { versionKey: false }
);

module.exports = mongoose.model('student', studentSchema);
