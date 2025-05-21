const express = require ('express'); //IMPORTA EXPRESS
const path = require ('path');

// const morgan = require('morgan');
// const cookieParser = require('cookie-parser');
// const createError = require('http-errors');


const app = express(); // CREA UNA INSTANCIA DE EXPRESS
const PORT = 3000; //PUERTO EN EL QUE CORRERA EL SERVIDOR


// Configuración de EJS (vistas)

app.use(express.static('public'));

app.set('view engine','ejs');

//RUTA BASICA o PRINCIPAL
app.get('/', function(req, res){ //req=Pregunta----res=respuesta
    res.render('index');
});

//ROUTES
const inicioAdminRoute = require('./routes/inicioAdminRout');
app.use('/', inicioAdminRoute);

const gestionClientesRoute = require('./routes/gestionClientesRout');
app.use('/', gestionClientesRoute);

const gestionAsistenciasRoute = require('./routes/gestionAsistenciasRout');
app.use('/', gestionAsistenciasRoute);

const gestionMembresiasRoute = require('./routes/gestionMembresiasRout');
app.use('/', gestionMembresiasRoute);

const inicioClienteRoute = require('./routes/inicioClienteRout');
app.use('/', inicioClienteRoute);

const asistenciasClienteRoute = require('./routes/asistenciasClienteRout');
app.use('/', asistenciasClienteRoute);

const membresiasClienteRoute = require('./routes/membresiasClienteRout');
app.use('/', membresiasClienteRoute);



app.use(express.urlencoded({ extended: true })); // Necesario para leer datos de formularios

// Simulación de una base de datos de usuarios
const users = [
    { email: 'admin@gmail.com', password: '123', role: 'admin' },
    { email: 'cliente1@gmail.com', password: '123', role: 'cliente' },
    { email: 'osman@gmail.com', password: '123', role: 'cliente' },
];

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Buscar usuario que coincida con email y contraseña
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        // Redirige a vistas distintas según el rol
        if (user.role === 'admin') {
            res.render('inicioAdmin', { user, success: 'Bienvenido Administrador', error: null });
        } else if (user.role === 'cliente') {
            res.render('InicioCliente', { user, success: 'Bienvenido Cliente', error: null });
        }
    } else {
        res.render('index', { error: 'Credenciales incorrectas', success: null });
    }
});





//INICIAR EL SERVIDOR
app.listen(PORT, () => {
    console.log('Servidor corriendo en http://localhost:${PORT}');
});