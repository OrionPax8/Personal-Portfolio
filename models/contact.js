/*!-- Jason McAuslan -->
<!-- 301279046 -->
<!-- June 18th, 2023 -->
<!-- models/contact.js -->
*/

let mongoose = require('mongoose');

// create a contact model class

let contactModel = mongoose.Schema({
    name: String,
    number: String,
    email: String
},
{
    collection: 'business_contacts'
});

module.exports = mongoose.model('Contact', contactModel);