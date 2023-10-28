const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const alumnos = require('./routes/api/alumnos');
const alumno = require('./routes/alumno');

const registro = require('./routes/api/registro');
const login = require('./routes/api/login');

const verifica = require('./middleware/verifyToken');
// para pull request
// para validar cambios de pull request
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));


app.use('/api/alumno', verifica,alumnos);
app.use('/alumnos', alumno);
app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.use('/api/registro', registro);
app.use('/api/login', login);

//text
// app.get('/', (req, res) => {
//     res.send('Konnichiwa minna!');
// });

//json
// app.get('/alumnos', (req, res) => {
//     res.json({ mensaje: 'Bienvenido' });
// });

//html x route
// app.route('/alumnos').get((req, res) => {
//     res.send('<h1>Bienvenido</h1>');
// }).post((req, res) => {
//     console.log('Petición POST recibida');
// })

app.listen(3000, () => {
    console.log('Server running on port 3000');
});