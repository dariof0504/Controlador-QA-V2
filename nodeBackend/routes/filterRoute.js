const { filterSideController } = require('../controllers/sideFilterController.js')
const { Router } = require('express')

const filterRoute = Router()

filterRoute.post('/sideFilter', filterSideController)

module.exports = {
    filterRoute
}