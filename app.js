const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const alumnos = require('./routes/api/alumnos');
const alumno = require('./routes/alumno');

// para pull request
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use('/api/alumno', alumnos);
app.use('/alumnos', alumno);
app.get('/', (req, res) => {
    res.render('index.ejs');
});

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