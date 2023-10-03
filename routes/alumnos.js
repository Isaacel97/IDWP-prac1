const express = require('express');
const router = express.Router();
const controlador = require('../controllers/alumnos');

router.get('/', (req, res) => {
    res.json(controlador.getAlumnos());
});

router.get('/:id', (req, res) => {
    res.json({ mensaje: 'Alumno ' + req.params.id });
});

router.get('/perfil/:nombre', (req, res) => {
    res.json({ mensaje: 'Perfil de:' + req.params.nombre });
});

router.post('/', (req, res) => {
    console.log('post recibido');
    res.json(controlador.guardarAlumno(req.data));
});

router.put('/', (req, res) => {});

router.delete('/', (req, res) => {});

module.exports = router;