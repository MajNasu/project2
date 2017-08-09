//Dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

//Port
const port = process.env.port || 3000;

//Database
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/grocery_app_dev';

//Errors
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
  console.log( 'DB: Connected' );
});

//Middleware
app.use(session({
  secret: "random",
  resave: false,
  saveUninitialized: false
}));
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: false}));



//Routes
app.get( '/' , ( req, res ) => {
  res.send('hi');
});


//Connection & Listener
mongoose.connect(mongoUri);
app.listen(port, () =>{
  console.log('listening on port' + port);
});
