//Dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));
app.use(methodOverride('_method'));

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
const port = process.env.port || 3000;
app.listen(port, () =>{
  console.log('listening on port' + port);
});
