/*!-- Jason McAuslan -->
<!-- 301279046 -->
<!-- June 4th, 2023 -->
<!-- users.js -->
*/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Users Placeholder');
});

module.exports = router;
