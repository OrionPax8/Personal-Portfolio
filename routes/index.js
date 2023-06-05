/*!-- Jason McAuslan -->
<!-- 301279046 -->
<!-- June 4th, 2023 -->
<!-- index.js -->
*/
let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET about us page. */
router.get('/about', function(req, res, next) {
  res.render('about_me', { title: 'About'});
});

/* GET products page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects'});
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services'});
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me'});
});

module.exports = router;
