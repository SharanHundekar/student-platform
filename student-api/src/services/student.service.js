const pool = require("../config/db");

exports.getStudents = async () => {
  const res = await pool.query("SELECT * FROM students");
  return res.rows;
};

exports.createStudent = async (name, age) => {
  const res = await pool.query(
    "INSERT INTO students(name, age) VALUES($1,$2) RETURNING *",
    [name, age]
  );
  return res.rows[0];
};