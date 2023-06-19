/*!-- Jason McAuslan -->
<!-- 301279046 -->
<!-- June 18th, 2023 -->
<!-- index.js -->
*/
let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index')

/* GET home page. */
router.get('/', indexController.displayHomePage);

router.get('/home', indexController.displayHomePage);

/* GET about us page. */
router.get('/about', indexController.displayAboutPage);

/* GET projects page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET services page. */
router.get('/services', indexController.displayServicesPage);

/* GET contact page. */
router.get('/contact', indexController.displayContactPage);

/* GET Route for displaying the login page. */
router.get('/login', indexController.displayLoginPage);

/* POST Route for processing the login page. */
router.post('/login', indexController.processLoginPage);

/* GET Route for displaying the register page. */
router.get('/register', indexController.displayRegisterPage);

/* POST Route for processing the register page. */
router.post('/register', indexController.processRegisterPage);

/* GET to perform logout */
router.get('/logout', indexController.performLogout);

module.exports = router;
