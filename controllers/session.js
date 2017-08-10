const express = require('express');
const router = express.Router();
const User = require('../models/users.js');
const Profiles = require('../models/profiles.js');
const bcrypt = require('bcrypt');

//All users page
router.get('/', (req, res)=>{
  User.find({}, (err, foundUsers)=>{
    res.render('users/index.ejs', {
      users: foundUsers
    });
  });
});

//Login
router.get('/login', (req, res)=>{
  res.render('users/login.ejs', {

  })
})

router.get('/register', (req, res) => {
  res.render('users/register.ejs', {})
})

//Try to create a post route at the address /login that will accept data from the login form
router.post('/login', (req, res) => {
  User.findOne({username: req.body.username}, (err, user)=>{
    if(user){
      //now compare hash with the password from the from
      if(bcrypt.compareSync(req.body.password, user.password)){
        req.session.username = req.body.username;
        req.session.logged = true;
        res.redirect('/users');
      } else {
        req.session.message = "Username or password are incorrect";
        res.redirect('/sessions/login');
      }
    } else {
      req.session.message = "Username' or password are incorrect";
      res.redirect('/sessions/login');
    }
  });
  // //set a property on the session named username and equate it to username sent from the form
  // req.session.username = req.body.username;
  // //set a property on the session called logged and set it true
  // req.session.logged = true;
  // console.log(req.session);
  // res.redirect('/authors');
});

router.post('/registration', (req, res)=>{
  //hash password
  const password = req.body.password;
  const passwordHash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

  //Create object to store pw entries
  const userDB = {};
  userDB.username = req.body.username;
  userDB.password = passwordHash;
  User.create(userDB, (err, user)=>{
    console.log(user);

    //set up session
    req.session.username = user.username;
    req.session.logged = true;
    res.redirect('/authors');
  });
});

// router.get('/retrieve', (req, res) => {
//   if(req.session.anyProperty === "something you want it to"){
//     //do something if its a match
//   } else {
//     //do something else if its not
//   }
// });

router.get('/logout', (req, res)=>{
  req.session.destroy((err) =>{
    if(err){
      //do something
    } else {
      redirect('/');
    }
  })
})

// export the controller
module.exports = router;
