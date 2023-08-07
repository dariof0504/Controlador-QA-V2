const { DataTypes } = require("sequelize")
const { sqlDB } = require('../database/database.js')

// //Tabla usuarios: Estos contaran con un rol para que pueda acceder a las paginas segun los permisos que tenga
// const tb_user = sqlDB.define('tb_user', {
//     pk_id_user: {
//         type: DataTypes.UUID,
//         defaultValue: DataTypes.UUIDV4,
//         primaryKey: true
//     },
//     first_name_user: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     last_name_user: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     email_user: {
//         type: DataTypes.STRING,
//         validate: {
//             isEmail: true
//         },
//         unique: true,
//         allowNull: false
//     },
//     password_user: {
//         type: DataTypes.STRING
//     },

//     //Fecha del último inicio de sesion
//     last_date_login: {
//         type: DataTypes.DATE,
//         allowNull: true,
//         defaultValue: DataTypes.NOW
//     },

//     balance_token: {
//         type: DataTypes.INTEGER,
//         defaultValue: 0
//     }
// })

const rutina_element = sqlDB.define('tb_rutina', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    titulo: {
        type: DataTypes.STRING
    },
    servicio: {
        type: DataTypes.STRING
    },
    numeroAcciones: {
        type: DataTypes.INTEGER
    },
    targetURL: {
        type: DataTypes.STRING
    },
    comandos: {
        type: DataTypes.ARRAY(DataTypes.JSON)
    }
})

module.exports={rutina_element}