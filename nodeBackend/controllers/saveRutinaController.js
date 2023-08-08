const { rutina_element } = require("../model/userProfile");
const { RutinaSchema } = require("../schemas/rutinaSchema");

const saveRutinaController = async (req, res) => {
  try {
    const { body } = req;
    const result = new RutinaSchema(body);

    const dbResult = await rutina_element.create(result)

    console.log(Object.keys(dbResult))
    res.json(dbResult.dataValues);
  } catch (error) {}
};

module.exports = { saveRutinaController };
