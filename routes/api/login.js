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

router.post('/verify', async(req, res,next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(!token) return res.status(401).json({error: 'Access Denied'})
    try{
        const verified = jwt.verify(token, secret);
        res.status(400).json({data: verified});
    }catch(err){
        console.error(err);
        res.status(400).send('Invalid Token');
    }
 next();
});

module.exports = router;