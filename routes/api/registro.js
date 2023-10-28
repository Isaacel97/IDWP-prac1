const express = require('express');
const ControllerUser = require('../../controllers/usuario');
const RepositoryUser = require('../../database/repositoryUser');
const controller = new ControllerUser(new RepositoryUser());
const router = express.Router();

router.get('/', async (req, res) => {
    controller.getUsers().then((alumnos) => {
        res.json(alumnos);
    });
});

router.post('/', async (req, res) => {
    controller.addUser(req.body.username, req.body.password);
    res.status(200)
    res.json({ message: 'Usuario agregado exitosamente' });
})

module.exports = router;