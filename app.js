const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes')
const cookieParser = require('cookie-parser')

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json())
app.use(cookieParser())

// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = 'mongodb+srv://joo:joo123@cluster0.qf67u.mongodb.net/node-auth';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => {
    console.log('http://localhost:3000');
    app.listen(3000)
  })
  .catch((err) => console.log(err));

// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));
app.use(authRoutes)

// cookies
app.get('/set-cookies', (req, res) => {
    // res.setHeader('Set-Cookie', 'newUser=true')
    res.send('you got the cookies!')
})

app.get('/read-cookies', (req, res) => {

})