const jwt = require('jsonwebtoken');
const environment = require('../environment');
const secret = environment.secret

const verifyToken = (req, res, next) => {
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
}

module.exports = verifyToken;
