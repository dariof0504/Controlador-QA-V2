const { Router } = require('express')
const { sessionCreateController, sessionEditController, sessionIndividualController, listSessionAllController } = require('../controllers/sessionContorller')
const { executeController } = require('../controllers/executeController')

const sessionRoute = Router()

sessionRoute.post('/createSession', sessionCreateController)
sessionRoute.put('/editSession', sessionEditController)
sessionRoute.get('/session/:pk_id_session', sessionIndividualController)
sessionRoute.get('/listSession', listSessionAllController)
sessionRoute.post('/execute', executeController)

module.exports = {
    sessionRoute
}