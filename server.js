const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const port = process.env.port || 3000;
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/grocery_app_dev';



app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));
app.use(methodOverride('_method');


mongoose.connect(mongoUri);
app.listen(port, () =>{
  console.log('listening on port' + port);
})
