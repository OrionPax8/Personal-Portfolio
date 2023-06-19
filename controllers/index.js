/*!-- Jason McAuslan -->
<!-- 301279046 -->
<!-- June 18th, 2023 -->
<!-- normal.js -->
*/

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

// create the User Model instance
let userModel = require('../models/user');
let User = userModel.User; // alias

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', { title: 'Home', displayName: req.user ? req.user.username : '' });
}

module.exports.displayAboutPage = (req, res, next) => {
    res.render('about_me', { title: 'About', displayName: req.user ? req.user.name : '' });
}

module.exports.displayProjectsPage = (req, res, next) => {
    res.render('projects', { title: 'Projects', displayName: req.user ? req.user.name : '' });
}

module.exports.displayServicesPage = (req, res, next) => {
    res.render('services', { title: 'Services', displayName: req.user ? req.user.name : '' });
}

module.exports.displayContactPage = (req, res, next) => {
    res.render('contact', { title: 'Contact Me', displayName: req.user ? req.user.name : '' });
}

module.exports.displayLoginPage = (req, res, next) => {
    // check if the user is already logged in
    if(!req.user){
        res.render('auth/login', {
            title: "Login",
            messages: req.flash('loginMessage'),
            displayName: req.User ? req.User.name : ''
        })
    } else {
        return res.redirect('/');
    }
}

module.exports.processLoginPage = (req, res, next) => {

    passport.authenticate('local',
    (err, user, info) => {
        // Server Error?
        if(err){
            return next(err);
        }
        // User Login Error?
        if(!user){
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('login');
        }
        req.login(user, (err) => {
            // Server Error?
            if(err){
                return next(err);
            }
            return res.redirect('/contact-list');
        });
    }) (req,res,next);
}

module.exports.displayRegisterPage = (req, res, next) => {
    // check if the user is not already logged in
    if(!req.user){
        res.render('auth/register', {
            title: "Register",
            messages: req.flash('registerMessage'),
            displayName: req.User ? req.User.name : ''
        });
    } else {
        return res.redirect('/');
    }
}

module.exports.processRegisterPage = (req, res, next) => {
    // Initialize a User object
    let newUser = new User({
        username: req.body.username,
        email: req.body.email,
        name: req.body.name
    });

    User.register(newUser, req.body.password, (err) => {
        if(err)
        {
            console.log(err);
            if(err.name == 'UserExistsError')
            {
                req.flash
                (
                    'registerMessage',
                    'Registration Error: User Already Exists!'
                );
                console.log('Error: User Already Exists!');
            }
            return res.render('auth/register', {
                title: "Register",
                messages: req.flash('registerMessage'),
                displayName: req.user ? req.user.name : ''
            });
        } else {
            // If registration is successful
            console.log("Registration Successful");
            return passport.authenticate('local')(req, res, () => {
                res.redirect('/contact-list');
            });
        }
    });
}

module.exports.performLogout = (req,res,next) => {
    req.logout((err) =>{
        if(err){
            // handle error here
            console.log(err);
            return next(err);
        }
        return res.redirect('/');
    });
}
