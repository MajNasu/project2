const express = require('express');
const router = express.Router();
const Users = require('../models/users.js');
const bcrypt = require('bcrypt');

// Login route
router.get('/login', (req, res)=>{
  res.render('users/login.ejs', {});
});

//Register route
router.get('/register', (req, res) => {
  res.render('users/register.ejs', {})
});

//Try to create a post route at the address /login that will accept data from the login form
router.post('/login', (req, res) => {
  console.log(req.body);
  Users.findOne({username: req.body.username}, (err, user)=>{
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
});

router.post('/registration', (req, res)=>{
  //hash password
  const password = req.body.password;
  const passwordHash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

  //Create object to store pw entries
  const userDB = {};
  userDB.username = req.body.username;
  userDB.password = passwordHash;
  Users.create(userDB, (err, user)=>{
    console.log(user);

    //set up session
    req.session.username = user.username;
    req.session.logged = true;
    res.redirect('/users');
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
