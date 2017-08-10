const express = require('express');
const router = express.Router();
const Profiles = require('../models/profiles.js');
const Users = require('../models/users.js');

//Index Page: Show all users.
router.get('/', (req, res)=>{
  User.find({}, (err, foundUsers)=>{
    res.render('users/index.ejs', {
      users: foundUsers
    });
  });
});

// //Create a new thing
// router.get('/new', (req, res)=>{
//   res.render('profiles/new.ejs');
// });
//
// //Post route for creation
// router.post('/', (req, res)=>{
//   Profiles.create(req.body, (err, createdProfile)=>{
//     res.redirect('/profiles');
//   });
// });
//
// router.get('/:id', (req, res)=>{
//   Profiles.findById(req.params.id, (err, foundProfile)=>{
//     res.render('profiles/show.ejs',{
//       profile: foundProfile
//     });
//   });
// });
//
// router.delete('/:id', (req, res)=>{
//   Profiles.findByIdAndRemove(req.params.id, ()=>{
//     res.redirect('/profiles');
//   });
// });

module.exports = router;
