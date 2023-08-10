const { rutina_element } = require("../model/dbQA");
const { RutinaSchema } = require("../schemas/rutinaSchema");

const saveRutinaController = async (req, res) => {
  try {
    const { body } = req;
    const result = new RutinaSchema(body);

    const dbResult = await rutina_element.create(result)

    res.json(dbResult)
  } catch (error) {
    console.log(error)
  }
};

module.exports = { saveRutinaController };
