const { rutina_element } = require("../model/dbQA")
const { ListRutinaSchema } = require("../schemas/listRutinas")
const { RutinaSchema } = require("../schemas/rutinaSchema")

const listRutinaController = async (req, res) => {
    const allRutinas = await rutina_element.findAll()
    

    const result = new ListRutinaSchema(allRutinas)

    console.log('SE HA HECHO PETICION')

    res.json(result.returnLis())
}

const listIndividualRutinaController = async (req, res ) => {
    const {params} = req

    const {pk_id_rutina} = params

    const result = await rutina_element.findByPk(pk_id_rutina)

    res.json(new RutinaSchema(result))
}

module.exports = {listRutinaController, listIndividualRutinaController}