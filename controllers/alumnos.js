
const getAlumnos = () =>{
    return [{nombre: 'Juan', edad: 20}, {nombre: 'Ana', edad: 21}];
}

const guardarAlumno = (alumno) =>{
    return alumno;
};

module.exports = {
    getAlumnos: getAlumnos,
    guardarAlumno: guardarAlumno
}