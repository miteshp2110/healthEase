const express=require('express')
const citySearch = require('../controllers/citySearch')
const specialitySearch = require('../controllers/specialitySearch')
const router=express.Router()

// routes for search 
// '/seach/'
router.route('/city').get(citySearch)  // '/search/city'
router.route('/speciality').get(specialitySearch)

router.route('/speciality')

module.exports=router