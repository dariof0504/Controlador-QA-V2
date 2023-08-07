const { Router } = require("express");
const { saveRutinaController } = require("../controllers/saveRutinaController");
const { rutina_element } = require("../model/userProfile");

const saveRoute = Router();

saveRoute.post("/save", saveRutinaController);
saveRoute.post("/test", (req, res) => {
    const data = rutina_element.findAll()

    res.json(data)
})

module.exports = { saveRoute };
