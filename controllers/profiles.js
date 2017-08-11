//Declarations and requirements
const express = require('express');
const router = express.Router();
const Profiles = require('../models/profiles.js');
const Users = require('../models/users.js');

//Profile Index, display all the mock profiles
router.get('/', (req, res)=>{
  Profiles.find({}, (err, foundProfiles)=>{
    console.log(foundProfiles);
    res.render('profiles/index.ejs', {
      profiles: foundProfiles,
    });
  });
});

//Create a new profile
router.get('/new', (req, res)=>{
  res.render('profiles/new.ejs');
});

//Post route for creation
router.post('/', (req, res)=>{
    Profiles.create(req.body, (err, createdProfile)=>{
      res.redirect('/profiles');
    });
});

//Show route
router.get('/:id', (req, res)=>{
  Profiles.findById(req.params.id, (err, foundProfile)=>{
    res.render('profiles/show.ejs',{
      profile: foundProfile
    });
  });
});

//Edit route
router.get('/:id/edit', (req, res)=>{
  Profiles.findById(req.params.id, (err, foundProfile)=>{
    res.render('profiles/edit.ejs', {
      profiles: foundProfile
    });
  });
});
router.put('/:id', (req, res)=>{
  Profiles.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedProfile)=>{
    res.redirect('/profiles');
  })
});

//Delete route
router.delete('/:id', (req, res)=>{
  Profiles.findByIdAndRemove(req.params.id, (err, foundProfile)=>{
    res.redirect('/profiles');
  });
});

module.exports = router;
