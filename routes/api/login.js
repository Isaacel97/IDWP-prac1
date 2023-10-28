const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const environment = require('../../environment');
const secret = environment.secret;

router.post('/', async(req, res) => {
    res.status(200)
    const token = jwt.sign({ 
        user: req.body.email,
    }, secret)
    console.log(token)
    res.header('auth-token', token).json({
        data: {token}
    })
});

router.post('/verify', async(req, res) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    console.log(token)
    if(!token) return res.status(401).json({error: 'Access Denied'})
    try{
        const verified = jwt.verify(token, secret);
        verified
        res.status(400).json({data: verified});
    }catch(err){
        res.status(400).send('Invalid Token');
    }
});

module.exports = router;