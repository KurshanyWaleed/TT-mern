const {
  ControlerAllStudents,
  ControlerAddStudent,
  ControlerDeleteStudent,
} = require("../Controllers/controllers");

const express = require("express");
route = express.Router();

route.get("/allStudents", ControlerAllStudents);
route.post("/student/add", ControlerAddStudent);
//route.delete("/Student/:id", ControlerDeleteStudent);

module.exports = route;
