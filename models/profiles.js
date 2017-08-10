const mongoose = require('mongoose');

const profilesSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  about: String,
  summary: String
});

module.exports = mongoose.model('Profiles', profilesSchema);
