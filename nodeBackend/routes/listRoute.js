const { Router } = require('express')
const { listRutinaController, listIndividualRutinaController } = require('../controllers/listRutinaController')

const listRoute = Router()

listRoute.get('/list', listRutinaController)
listRoute.get('/list/:pk_id_rutina', listIndividualRutinaController)

module.exports = {
    listRoute
}