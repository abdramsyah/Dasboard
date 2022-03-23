const router = require('express').Router()


// route
// const user = require('./user')

// controller 
// const { Controller } = require('../controllers/Controllers')

// router.get('/', Controller.homePage)

// router.use('/user', user)



router.get('/', (req, res)=> {
  res.status(200).json("masusdask")
})
module.exports = router