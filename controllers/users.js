const express = require('express');
const router = express.Router();
const Profiles = require('../models/profiles.js');
const Users = require('../models/users.js');

//Index Page: Show all users.
router.get('/', (req, res)=>{
  Users.find({}, (err, foundUsers)=>{
    res.render('users/index.ejs', {
      users: foundUsers
    });
  });
});

//Show a specific user and his/her profile(s)
router.get('/:id', (req, res)=>{
  Users.find({}, (err, user)=> {
    Profiles.findById(req.params.id, (err, foundProfile)=>{
      res.render('profiles/show.ejs',{
        profile: foundProfile,
        user: user
      });
    });
  });
});

//Delete a user if you are the user
// router.delete('/:id', (req, res)=>{
//   Profiles.findByIdAndRemove(req.params.id, ()=>{
//     res.redirect('/profiles');
//   });
// });

module.exports = router;
