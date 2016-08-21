var express = require('express');
var router = express.Router();
var getHomePage = require('./getHomepage'); 

router.get('/', getHomepage);

module.exports = router;
