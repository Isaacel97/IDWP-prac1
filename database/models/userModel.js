const db = require('../config/db_connection');

const createUser = async(userData) => {
    const query = `INSERT INTO users (username, password, email, celular, role_id) VALUES ('${userData.username}', '${userData.password}', '${userData.email}', '${userData.celular}', '2')`;
    
    try {
        const res = await db.queryDB(query);
        console.log('res', res);  
    } catch (error) {
        console.error('Error', error);
        throw error;
    }
};

exports.createUser = {
    createUser: createUser
}