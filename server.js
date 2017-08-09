//Dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const db = mongoose.connection;

//Port
const port = process.env.port || 3000;

//Database
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/grocery_app_dev';

//Errors
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
  console.log( 'DB: Connected' );
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));
app.use(methodOverride('_method'));

//Routes
app.get( '/' , ( req, res ) => {
  res.render('index.ejs');
});


//Connection & Listener
mongoose.connect(mongoUri);
app.listen(port, () =>{
  console.log('listening on port' + port);
});
