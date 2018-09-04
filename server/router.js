const router = require('express').Router();
const SearchController = require('./search/controller.js')
const SignupController = require('./signup/controller.js')


router.get('/search', SearchController.get)
router.post('/signup', SignupController.post)

module.exports = router;