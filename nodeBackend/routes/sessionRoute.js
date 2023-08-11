const { Router } = require('express')
const { sessionCreateController, sessionEditController, sessionIndividualController, listSessionAllController } = require('../controllers/sessionContorller')

const sessionRoute = Router()

sessionRoute.post('/createSession', sessionCreateController)
sessionRoute.put('/editSession', sessionEditController)
sessionRoute.get('/session/:pk_id_session', sessionIndividualController)
sessionRoute.get('/listSession', listSessionAllController)

module.exports = {
    sessionRoute
}