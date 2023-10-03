const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');

router.get('/', (req, res) => {
    res.json({ mensaje: 'Bienvenido' });
});

router.get('/:id', (req, res) => {
   
});

router.post('/createUser', (req, res) => {
    console.log('Petición POST recibida');
    console.log('req.data', req.data);
    res.json(userModel.createUser(req.data));
});

router.put('/', (req, res) => {});

router.delete('/', (req, res) => {});

module.exports = router;