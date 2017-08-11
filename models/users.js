const mongoose = require('mongoose');
// const Profiles = require('./profiles.js');

const userSchema = new mongoose.Schema({
  username: String,
  password: String
  // profiles: [Profiles.schema]
});

module.exports = mongoose.model('Users', userSchema);
