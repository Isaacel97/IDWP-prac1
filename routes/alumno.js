const express = require('express');
const Controller = require('../controllers/alumnos');
const RepositoryAlumno = require('../database/repositoryAlumno');
const router = express.Router();
const controlador = new Controller(new RepositoryAlumno());

router.get('/', async(req, res) => {
    controlador.getAlumnos().then((alumnos) => {
        res.render('./alumnos/Lista.ejs', {
            pageName: 'Alumnos',
            alumnos: alumnos
        });
    });
});

router.get('/Registro', async (req, res) => {
    res.render('./alumnos/formulario.ejs', {
        pageName: 'Alumnos'
    });
});

router.post('/', async (req, res) => {
    const nombre = req.body.nombre;
    const email = req.body.email;
    controlador.addAlumno(nombre, email).then(() => {
        controlador.getAlumnos().then((alumnos) => {
            res.render('./alumnos/Lista.ejs', {
                pageName: 'Alumnos',
                alumnos: alumnos
            });
        });
    });
});

module.exports = router;