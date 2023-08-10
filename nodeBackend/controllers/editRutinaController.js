const { rutina_element } = require('../model/dbQA.js')
const { RutinaSchema } = require('../schemas/rutinaSchema.js')

const editRutinaController = async (req, res) => {

    const {body} = req

    const editElement = new RutinaSchema(body)

    const { pk_id_rutina } = editElement

    const result = await rutina_element.findByPk(pk_id_rutina)
    
    await result.update(editElement)

    await result.save()

    res.json(result)

}

module.exports = {editRutinaController}