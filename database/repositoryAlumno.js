const Alumno = require('./models/alumnoModel');

function Repository() {
    return{
        create: async(student) => {
            await Alumno.create(student);
        },
        getAll: async() => {
            try {
                return await Alumno.findAll();
            } catch (error) {
                return error;
            }   
        },
        getById: async(id) => {
            return Alumno.findAll({
                attributes: ['alumno_id', id]
            });
        },
    }
}

module.exports = Repository;