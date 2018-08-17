const router = require('express').Router();
const SearchController = require('./search/controller.js')

router.get('/search', SearchController.get)

module.exports = router;