// yellow_api/app.js (¡Renombrado de pp.js!)

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const cors = require('cors');
// var fs = require('fs'); // Se mueve a www.js

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testRouter = require('./routes/test');
const { apiRouter } = require('./bin/www');
var app = express();
// ELIMINADO: var server = require('http').createServer(app);
// ELIMINADO: var io = require('socket.io')(server, { ... })
// ELIMINADO: var serverPort = 3001;
// ELIMINADO: var user_socket_connect_list = [];


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ extended: true, limit: '100mb' }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
//app.use('/api/test', testRouter);
app.use('/api', apiRouter);
// Configuración de CORS HTTP (Express)
const corsOptions = {
    // Definimos una función para que el origen sea dinámico (local o producción)
    origin: (origin, callback) => {
        // MUY IMPORTANTE: Cambia las URLs placeholder
        const allowedOrigins = [
            'http://localhost:4200',
            'https://glistening-semolina-c9d037.netlify.app', // <--- TU URL NETLIFY
            'https://www.miempresa.com' // <--- TU DOMINIO PERSONALIZADO
        ];
        
        // Si el origen de la petición está en la lista o si no tiene origen (como Postman)
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            // Reemplazamos el throw por una respuesta de error más limpia
            callback(new Error('Not allowed by CORS policy'));
        }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD"]
}
app.use(cors(corsOptions));

// ELIMINADO: import express inside dynamic added. (Se mueve a www.js)
/* fs.readdirSync('./controllers').forEach((file) => { ... }) */


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


// ----------------------------------------------------------------------------------
// Solo exportamos la aplicación Express. Las funciones prototipo se mantienen si quieres:
module.exports = app;

// ELIMINADO: server.listen(serverPort);
// ELIMINADO: console.log("Server Start : " + serverPort );


Array.prototype.swap = (x, y) => {
    var b = this[x];
    this[x] = this[y];
    this[y] = b;
    return this;
}

Array.prototype.insert = (index, item) => {
    this.splice(index, 0, item);
}

Array.prototype.replace_null = (replace = '""') => {
    return JSON.parse(JSON.stringify(this).replace(/mull/g, replace));
}

String.prototype.replaceAll = (search, replacement) => {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
}