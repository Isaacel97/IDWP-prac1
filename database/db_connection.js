const Sequelize = require('sequelize');

const sequelize = new Sequelize('DWP', 'root', 'Isa.uteq5', {
    host: 'localhost',
    dialect: 'mysql'
});

const open = async() => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Error', error);
    }
}
open();

module.exports = sequelize;
