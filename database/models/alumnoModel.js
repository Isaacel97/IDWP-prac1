const sequelize = require('../db_connection');
const { Sequilize, DataTypes } = require('sequelize');

const alumnoModel = sequelize.define('Alumno', {
    alumno_id: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nombre: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    }
});

alumnoModel.sync({ force: false });
module.exports = alumnoModel;