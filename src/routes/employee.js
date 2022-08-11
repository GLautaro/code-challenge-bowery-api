const express = require("express");
const employeeSchema = require("../models/employee");

const router = express.Router();

// create employee
router.post("/users", (req, res) => {
  const user = employeeSchema(req.body);
  user
    .save()
    .then((data) => res.json(data._id))
    .catch((error) => res.status(500).send(error));
});

// get all employees
router.get("/users", (req, res) => {
  employeeSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.status(500).send(error));
});

module.exports = router;
