const express = require('express');
const router = express.Router();
const Profiles = require('../models/profiles.js');

router.get('/', (req, res)=>{
  Profiles.find({}, (err, foundProfiles)=>{
    res.render('profiles/index.ejs', {
      profiles: foundProfiles
    });
  });
});

router.post('/', (req, res)=>{
  Profiles.create(req.body, (err, createdProfile)=>{
    res.redirect('/profiles');
  });
});

router.get('/new', (req, res)=>{
  res.render('profiles/new.ejs');
});

router.get('/:id', (req, res)=>{
  Profiles.findById(req.params.id, (err, foundProfile)=>{
    res.render('profiles/show.ejs',{
      profile: foundProfile
    });
  });
});

module.exports = router;
