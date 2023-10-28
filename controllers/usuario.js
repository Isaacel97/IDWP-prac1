function UserController(repository) {
    return {
        getUsers : async () => {
            return await repository.getAll();
        },
        getUserById : async (id) => {
            return await repository.getById(id);
        },
        addUser : async (email, password) => {
            await repository.create({
                "user_id": email,
                "password": password
            })
        }
    }
}

module.exports = UserController