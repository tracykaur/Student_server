const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const api = require('./routes/api');
const Student = require('./models/student');
const City = require('./models/city');


app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/* API Routes */
app.use('/api', api);

/* Pretty User Views */


app.get('/students', (req, res) => {
    Promise.all([
        Student.find().populate('city'),
        City.find()
    ]).then(([students, cities]) => {
      console.log(cities)
        res.render('students', {students, cities})
    })
});


app.post('/students', (req, res) => {
  let student_name = req.body.student_name;
  let student_city = req.body.student_city;

  Student.create({name: student_name, city: student_city}).then(() =>{
  res.redirect('/students');
})
})

app.get('/cities', (req, res) => {
  City.find().then((cities) => {
    res.render('cities', {cities: cities});

  })
});

app.post('/cities', (req, res) => {
  let city_name = req.body.city_name;
  City.create({name: city_name}).then(() =>{
  res.redirect('/cities');
})
})

app.listen(port);
