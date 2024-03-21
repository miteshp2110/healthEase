const express=require('express')
const citySearch = require('../controllers/citySearch')
const router=express.Router()

// routes for search 
// '/seach/'
router.route('/city').get(citySearch)  // '/search/city'
router.route('/speciality')

module.exports=router