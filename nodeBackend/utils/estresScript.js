const { v4: uuid } = require("uuid");
const { generarNumeroAleatorio } = require("./generalFunctions.js");

const estresGenerator = (comandos) => {
  let finalResult = [];

  for (let i = 0; i < comandos.length; i++) {
    const data = comandos[i];

    const { command, value } = data;

    if (command === "type") {
      let valor;

      const { propType, tipoDeDato } = data;

      const { unico, longitudIndefinida, longitud } = propType;

      const longitudEstablecida = longitudIndefinida ? 20 : longitud;

      if (unico) {
        valor =
          tipoDeDato === "string"
            ? ("Test-" + uuid() + uuid()).slice(0, longitudEstablecida)
            : generarNumeroAleatorio(longitudEstablecida);
      } else {
        valor = value;
      }

      const result = { ...data, value: valor };

      finalResult.push(result);
    } else {
      const result = { ...data };

      finalResult.push(result);
    }
  }

  return finalResult;
};

module.exports = {
  estresGenerator,
};
