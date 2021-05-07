const Student = require("../Models/students");
const bcrypt = require("bcrypt");

exports.ControlerAllStudents = (req, res) => {
  res.end("hello from all");
  StudentSchema((err, doc) => {
    console.log(doc);
  });
};
// ! http://localhost:4000/api/student/add
exports.ControlerAddStudent = async (req, res) => {
  console.log(req.body);
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);
  const student = new Student({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword,
  });
  try {
    const studentSaved = await student.save();
    res.json("user Created ! :D");
  } catch (err) {
    console.log(err);
  }
};
