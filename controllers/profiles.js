const express = require('express');
const router = express.Router();
const Profiles = require ('../models/profiles.js');

router.get('/', (req, res)=>{
  // Profiles.find({}, (err, foundProfiles)=>{
  //   res.render('profiles/index.ejs', {
  //     profiles: foundProfiles
  //   });
  // });
  res.send('hello');
});

router.post('/', (req, res)=>{
  Profiles.create(req.body, (err, createdProfile)=>{
    res.redirect('/profiles');
  });
});

// router.get('/:id', (req, res)=>{
//   res.redirect('')
// })

module.exports = router;
