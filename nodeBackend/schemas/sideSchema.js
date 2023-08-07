const { config } = require("dotenv");
const { generarNumeroAleatorio } = require("../utils/generalFunctions");

config();

// const DEFAULT_LONGITUD = parseInt(process.env.DEFAULT_LONGITUD)

const DEFAULT_LONGITUD = 40;

class ActionSchema {
  constructor(accion, index) {
    //Instancias del objeto
    this.index = index;
    this.value = accion.value;
    this.command = accion.command;
    this.tipoDeDato;
    this.propiedades;

    //Instancias generales

    //filtro los ID
    let targets = accion.targets;
    targets = targets.filter((e) => (e[1] !== "id") | (e[1] !== "name"));

    //Separamos los Objetivos CSS y los XPATH
    let xpathObjectives = targets.filter((e) => e[1].includes("xpath:"));
    xpathObjectives = xpathObjectives.map((e) => {
      e[0] = e[0].split("xpath=")[1];
      e[1] = e[1].split(":")[1];
      return e;
    });

    let xpathObjective;

    const typeXPATH = ["idRelative", "position", "attributes", "innerText"];

    //Establecemos el XPATH Objective
    typeXPATH.map((t) => {
      if (xpathObjective === undefined) {
        xpathObjective = xpathObjectives.find((e) => e[1] === t);
      }
    });

    //Establecemos el CSS Objective
    let cssObjective = targets.filter((e) => e[1].includes("css:finder"));
    cssObjective = cssObjective.map((e) => {
      e[0] = e[0].split("css=")[1];
      e[1] = e[1].split(":")[0];
      return e;
    })[0];

    //Realizamos un filtro para determinar si existe informacion de xpath o css
    if (xpathObjective === undefined) {
      this.location = cssObjective[0];
      this.typeLocation = cssObjective[1];
    } else {
      this.location = xpathObjective[0];
      this.typeLocation = "xpath";
    }

    //Establecer tipo de dato

    const validarTipoDeDato = parseFloat(accion.value) ? true : false;

    this.tipoDeDato = validarTipoDeDato ? "number" : "string";

    this.propType = {
      longitudIndefinida: false,
      obligatorio: false,
      unico: false,
      tieneAdvertencias: false,
      advertencias: [],
      longitud: DEFAULT_LONGITUD,
    };

    this.propClick = { validador: false };
  }
}

class SideSchema {
  constructor(JSON) {
    //Filtramos las acciones
    let commands = JSON.tests[0].commands;

    //filtrar acciones necesarias
    commands = commands
      .map((f) =>
        f.command === "click" ? f : f.command === "type" ? f : false
      )
      .filter((e) => !e === false);

    //Filtramos las acciones
    commands = commands.map((e) => {
      const index = commands.indexOf(e);
      return new ActionSchema(e, index);
    });

    //Establecemos las instancias
    this.targetURL = JSON.url;
    this.commands = commands;
  }
}

module.exports = { SideSchema };
