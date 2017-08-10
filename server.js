//Dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const ejs = require('ejs');
const profilesController = require('./controllers/profiles.js');
const sessionController = require('./controllers/session.js');
const userController = require('./controllers/users.js');

app.use('/users', userController);
app.use('/profiles', profilesController);
app.use('/sessions', sessionController);
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: false}));

//Routes
app.get('/', (req, res) => {
  res.render('index.ejs');
});

//Database
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/craftli';

//Mongoose
mongoose.connect(mongoUri);
mongoose.connection.once('open', ()=>{
  console.log('mongoose connection successful');
})

//Port & Listener
const port = process.env.PORT || 3000;
app.listen(port, () =>{
  console.log('listening on port' + port);
});
