const express = require('express');
const Controller = require('../../controllers/alumnos');
const RepositoryAlumno = require('../../database/repositoryAlumno');
const controlador = new Controller(new RepositoryAlumno());
const router = express.Router();

router.get('/', async (req, res) => {
    controlador.getAlumnos().then((alumnos) => {
        res.json(alumnos);
    });
});

router.post('/', async (req, res) => {
    controlador.addAlumno(req.body.nombre, req.body.email);
    res.status(200);
    res.json({ mensaje: req.body.nombre });
});

module.exports = router;

