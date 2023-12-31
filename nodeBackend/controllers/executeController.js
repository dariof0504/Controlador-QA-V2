const { session_element, rutina_element } = require("../model/dbQA.js");
const { estresGenerator } = require("../utils/estresScript.js");
const { ExecuteSchema } = require("../schemas/executeSchema.js");
const axios = require('axios')

const executeController = async (req, res) => {
  const { body } = req;

  const { pk_id_session } = body;

  const result = await session_element.findByPk(pk_id_session);

  const { rutinasPorEjecutar, targetURL, servicio } = result;

  let rutinaAcumulada = [];

  for (let i = 0; i < rutinasPorEjecutar.length; i++) {
    const data = rutinasPorEjecutar[i];

    const { pk_id_rutina, tipoTest } = data;

    const rutina = await rutina_element.findByPk(pk_id_rutina);

    const { comandos } = rutina;

    switch (tipoTest) {
      case "estres":
        const { repeticiones } = data;

        for (let i = 1; i <= repeticiones; i++) {
          const rutinaRepetida = estresGenerator(comandos);
          rutinaRepetida.map((rut) => rutinaAcumulada.push(rut));
        }
      case "normal":
        comandos.map((rut) => rutinaAcumulada.push(rut));
    }
  }

  const finalElement = { targetURL, servicio, comandos: rutinaAcumulada };

  try {

    let request

    switch(servicio) {
      case 'appium':
        request = await axios.post('http://127.0.0.1:7000/executeAppium', finalElement)
        break
      case 'selenium':
        request = await axios.post('http://127.0.0.1:7000/executeSelenium', finalElement)
        break
    }

  } catch (error) {
    console.log(error)
  }

  res.json(new ExecuteSchema(finalElement));
};

module.exports = {
  executeController,
};
