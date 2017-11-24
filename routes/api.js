const express = require('express');
let router = express.Router();
const Student = require('../models/student');
const City = require('../models/city');

router.post('/students', (req, res) => {
  let student = req.body.name;
  students.push(student);
  res.send(student);
})

router.get('/students', (req, res) => {
  Student.find().then((students) => {
    res.json(students);
  })});

router.get('/cities', (req, res) => {
  City.find().then((cities) => {
    res.json(cities);
  })});


router.post('/cities', (req, res) => {
  let city = req.body.name;
  city.push(city);
  res.send(city);
})

module.exports = router;
