//Dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const ejs = require('ejs');
const session = require('express-session');
const profilesController = require('./controllers/profiles.js');
const sessionController = require('./controllers/session.js');
const userController = require('./controllers/users.js');

//MW
app.use(express.static('public'));
app.use(methodOverride('method'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({
  secret: "shhhhhhhhhhh",
  resave: false,
  saveUninitialized: false
}));

//Controllers
app.use('/users', userController);
app.use('/profiles', profilesController);
app.use('/sessions', sessionController);


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
  console.log('listening on port ' + port);
});
