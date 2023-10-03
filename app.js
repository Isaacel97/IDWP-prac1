const express = require('express');
const alumnos = require('./routes/alumnos');
const users = require('./routes/users');
const db = require('./config/db_connection');

const app = express();

db.connectDB();
app.use('/alumnos', alumnos);
app.use('/users', users);


//text
app.get('/', (req, res) => {
    res.send('Konnichiwa minna!');
});

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