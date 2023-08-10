const { DataTypes } = require("sequelize");
const { sqlDB } = require("../database/database.js");

const rutina_element = sqlDB.define("tb_rutina", {
  pk_id_rutina: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  titulo: {
    type: DataTypes.STRING,
  },
  servicio: {
    type: DataTypes.STRING,
  },
  numeroAcciones: {
    type: DataTypes.INTEGER,
  },
  targetURL: {
    type: DataTypes.STRING,
  },
  comandos: {
    type: DataTypes.ARRAY(DataTypes.JSON),
  },
});

const session_element = sqlDB.define("tb_session", {
  pk_id_session: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  titulo: {
    type: DataTypes.STRING,
  },
  rutinasPorEjecutar: {
    type: DataTypes.ARRAY(DataTypes.JSON),
  },
});

const estres_element = sqlDB.define("tb_estres", {
  pk_id_estres: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  titulo: {
    type: DataTypes.STRING,
  },
  rutinaFuente: {
    type: DataTypes.UUID,
    allowNull: false,
  },
});

module.exports = { rutina_element, session_element, estres_element };
