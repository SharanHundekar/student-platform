const service = require("../services/student.service");

exports.getStudents = async (req, res) => {
  const students = await service.getStudents();
  res.json(students);
};

exports.createStudent = async (req, res) => {
  const { name, age } = req.body;
  console.log('Tets')
  const student = await service.createStudent(name, age);
  res.json(student);
};