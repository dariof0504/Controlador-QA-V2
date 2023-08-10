const { Router } = require("express");
const { saveRutinaController } = require("../controllers/saveRutinaController");
const { rutina_element } = require('../model/dbQA.js')

const saveRoute = Router();

saveRoute.post("/save", saveRutinaController);
saveRoute.get('/test', async (req, res) => {
    const data = await rutina_element.findByPk('386a5e7f-9782-584f-10b9-5980dddd3676')
    res.json(data)
})
module.exports = { saveRoute };
