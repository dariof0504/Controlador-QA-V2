const { session_element } = require('../model/dbQA.js')
const { SessionSchema, ListSessionSchema } = require('../schemas/sessionSchema.js')

const sessionCreateController = async (req, res) => {
    const { body } = req

    const session = new SessionSchema(body)

    const result = await session_element.create(session)

    console.log(result)

    result && res.json('Creado con exito')
}

const sessionEditController = async (req, res) => {
    const { body } = req

    const { pk_id_session } = body

    const element = await session_element.findByPk(pk_id_session)

    await element.update(body)

    res.json('Edicion con exito')
}

const sessionIndividualController = async (req, res) => {
    const { params } = req

    const { pk_id_session } = params

    const element = await session_element.findByPk(pk_id_session)

    res.json(new SessionSchema(element))
}

const listSessionAllController = async (req, res) => {
    const sessions = await session_element.findAll()
    
    const result = sessions.map(s => new ListSessionSchema(s))

    res.json(result)

}

module.exports = {
    sessionCreateController,
    sessionEditController,
    sessionIndividualController,
    listSessionAllController
}