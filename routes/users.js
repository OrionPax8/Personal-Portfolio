/*!-- Jason McAuslan -->
<!-- 301279046 -->
<!-- June 18th, 2023 -->
<!-- users.js -->
*/

let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Users Placeholder');
});

module.exports = router;
