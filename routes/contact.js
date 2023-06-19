/*!-- Jason McAuslan -->
<!-- 301279046 -->
<!-- June 18th, 2023 -->
<!-- route/contact.js -->
*/

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

let contactController = require('../controllers/contact');

// Helper function for guard purpose
function requireAuth(req, res, next)
{
    // Check if user is logged in
    if(!req.isAuthenticated()) 
    {
        return res.redirect('/login');
    }
    next();
}

// Get Route for the Contact List page - READ Operation
router.get('/', requireAuth, contactController.displayContactList);

// Get Route for displaying the Edit page - UPDATE Operation
router.get('/edit/:id', requireAuth, contactController.displayEditPage);

// Post Route for processing the Edit page - UPDATE Operation
router.post('/edit/:id', requireAuth, contactController.processEditPage);

// Get to perform Deletion - Delete Operation
router.get('/delete/:id', requireAuth, contactController.performDelete);

module.exports = router;