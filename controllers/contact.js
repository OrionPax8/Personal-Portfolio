/*!-- Jason McAuslan -->
<!-- 301279046 -->
<!-- June 18th, 2023 -->
<!-- controllers/contact.js -->
*/

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

// connect to contact Model
let Contact = require('../models/contact');

module.exports.displayContactList = async (req, res, next)=>{
    try {
        let contactList = await Contact.find({}, null, {sort: {name:1}});
        
        res.render('contacts/list', {
            title: 'Business Contacts', 
            ContactList: contactList,
            displayName: req.user ? req.user.name : ''})
    } catch (err){
        console.log(err);
    }
};


module.exports.displayEditPage = async (req, res, next) => {
    let id = req.params.id;

    try {
        let contactToEdit = await Contact.findById(id);
        res.render('contacts/edit', {
            title: 'Edit Contact', 
            contact: contactToEdit,
            displayName: req.user ? req.user.name : ''});
    } catch (err){
        console.log(err);
        res.status(500).send(err);
    }
};

module.exports.processEditPage = async (req, res, next) => {
    let id = req.params.id;

    let updatedContact = {
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email,
    };

    try {
        await Contact.updateOne({_id: id}, updatedContact);
        res.redirect('/contact-list');
    } catch (err){
        console.log(err);
        res.status(500).send(err);
    }
};

module.exports.performDelete = async (req, res, next) => {
    let id = req.params.id;

    try {
        await Contact.findByIdAndRemove(id);
        res.redirect('/contact-list');
    }catch (err){
        console.log(err);
        res.status(500).send(err);
    }
};
