const User = require('./models/userModel');

function Repository() {
    return{
        create: async(student) => {
            await User.create(student);
        },
        getAll: async() => {
            try {
                return await User.findAll();
            } catch (error) {
                return error;
            }   
        },
        getById: async(id) => {
            return User.findAll({
                attributes: ['alumno_id', id]
            });
        },
    }
}

module.exports = Repository;