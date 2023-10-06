function Controller(repository) {
    return {
        getAlumnos: async () => {
            const res = await repository.getAll();
            console.log(res);
            return res;
        },
        getAlumnoById: async (id) => {
            return await repository.getById(id);
        },
        addAlumno: async (nombre, email) => {
            await repository.create({
                "alumno_id": email,
                "nombre": nombre,
                "email": email
            })
        }
    }
}

module.exports = Controller;