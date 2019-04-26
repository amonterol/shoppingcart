var express = require('express');
var router = express.Router();
var csurf = require('csurf');
var passport = require('passport');

var csrfProtection = csurf();
router.use(csrfProtection);


router.get('/profile', isLoggedIn, function(req, res, next) { 
    res.render('user/profile');
  });

router.use('/', notLoggedIn, function(req, res, next) {
    next()
;});

/*SIGN UP GET page*/
router.get('/signup', function(req, res, next) {
    var messages = req.flash('error');
    res.render('user/signup', { csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0 });
  });
  
  /*SIGN UP POST page*/
  router.post('/signup', passport.authenticate('local.signup', {
    successRedirect:'/user/profile',
    failureRedirect: '/user/signup',
    failureFlash: true
  }));
  
 
  /*SIGN UN GET page*/
  router.get('/signin', function(req, res, next) {
    var messages = req.flash('error');
    res.render('user/signin', { csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0 });
  });
  
  /*SIGN IN POST page*/
  router.post('/signin', passport.authenticate('local.signin', {
    successRedirect:'/user/profile',
    failureRedirect: '/user/signin',
    failureFlash: true
  }));

  router.get('/logout', function(req, res, next) {
    req.logout();
    res.redirect('/');
  });

 

  module.exports = router;

  //Proteccion de los routes
  function isLoggedIn(req, res, next) {
      if (req.isAuthenticated()){
          return next()
      }
      res.redirect('/');
  }
  function notLoggedIn(req, res, next) {
    if (!req.isAuthenticated()){
        return next()
    }
    res.redirect('/');
  }