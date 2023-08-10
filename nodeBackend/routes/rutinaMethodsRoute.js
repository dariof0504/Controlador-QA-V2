const { Router } = require('express')
const { editRutinaController } = require('../controllers/editRutinaController')

const rutinaMethodsRoute = Router()

rutinaMethodsRoute.put('/edit', editRutinaController)

module.exports = { rutinaMethodsRoute }