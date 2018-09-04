const router = require('express').Router();
const SearchController = require('./search/controller.js')
const SignupController = require('./signup/controller.js')
const LoginController = require('./login/controller.js');

router.get('/search', SearchController.get)
router.get('/login', LoginController.get)
router.post('/signup', SignupController.post)

module.exports = router;