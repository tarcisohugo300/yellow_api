// // yellow_api/app.js (¡Renombrado de pp.js!)

// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// const cors = require('cors');
// // var fs = require('fs'); // Se mueve a www.js

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
// var testRouter = require('./routes/test');
// const { apiRouter } = require('./bin/www');
// var app = express();
// // ELIMINADO: var server = require('http').createServer(app);
// // ELIMINADO: var io = require('socket.io')(server, { ... })
// // ELIMINADO: var serverPort = 3001;
// // ELIMINADO: var user_socket_connect_list = [];


// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// app.use(logger('dev'));
// app.use(express.json({ limit: '100mb' }));
// app.use(express.urlencoded({ extended: true, limit: '100mb' }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// //app.use('/api/test', testRouter);
// app.use('/api', apiRouter);
// // Configuración de CORS HTTP (Express)
// const corsOptions = {
//     // Definimos una función para que el origen sea dinámico (local o producción)
//     origin: (origin, callback) => {
//         // MUY IMPORTANTE: Cambia las URLs placeholder
//         const allowedOrigins = [
//             'http://localhost:4200',
//             'https://glistening-semolina-c9d037.netlify.app', // <--- TU URL NETLIFY
//             'https://www.miempresa.com' // <--- TU DOMINIO PERSONALIZADO
//         ];
        
//         // Si el origen de la petición está en la lista o si no tiene origen (como Postman)
//         if (!origin || allowedOrigins.includes(origin)) {
//             callback(null, true);
//         } else {
//             // Reemplazamos el throw por una respuesta de error más limpia
//             callback(new Error('Not allowed by CORS policy'));
//         }
//     },
//     methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD"]
// }
// app.use(cors(corsOptions));

// // ELIMINADO: import express inside dynamic added. (Se mueve a www.js)
// /* fs.readdirSync('./controllers').forEach((file) => { ... }) */


// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//     next(createError(404));
// });

// // error handler
// app.use(function (err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};

//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
// });


// // ----------------------------------------------------------------------------------
// // Solo exportamos la aplicación Express. Las funciones prototipo se mantienen si quieres:
// module.exports = app;

// // ELIMINADO: server.listen(serverPort);
// // ELIMINADO: console.log("Server Start : " + serverPort );


// Array.prototype.swap = (x, y) => {
//     var b = this[x];
//     this[x] = this[y];
//     this[y] = b;
//     return this;
// }

// Array.prototype.insert = (index, item) => {
//     this.splice(index, 0, item);
// }

// Array.prototype.replace_null = (replace = '""') => {
//     return JSON.parse(JSON.stringify(this).replace(/mull/g, replace));
// }

// String.prototype.replaceAll = (search, replacement) => {
//     var target = this;
//     return target.replace(new RegExp(search, 'g'), replacement);
// }
































// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// const cors = require('cors');
// var fs = require('fs');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// var app = express();
// // var server = require('http').createServer(app);
// // var io = require('socket.io')(server, {
// //   cors: {
// //     origin: "http://localhost:4200",
// //     methods: ["GET", "POST"]
// //   }
// // })
// // var serverPort = 3001;

// var user_socket_connect_list = [];

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// app.use(logger('dev'));
// app.use(express.json({ limit: '100mb' }));
// app.use(express.urlencoded({ extended: true, limit: '100mb' }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// const corsOptions = {
//   origin: "http://localhost:4200",
// }

// app.use(cors(corsOptions));

// // import express inside dynamic added.
// fs.readdirSync('./controllers').forEach((file) => {
//   if (file.substr(-3) == ".js") {
//     route = require('./controllers/' + file);
//     route.controller(app, io, user_socket_connect_list);
//   }
// })

// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// // module.exports = app;

// // server.listen(serverPort);

// // console.log("Server Start : " + serverPort );

// Array.prototype.swap = (x, y) => {
//   var b = this[x];
//   this[x] = this[y];
//   this[y] = b;
//   return this;
// }

// Array.prototype.insert = (index, item) => {
//   this.splice(index, 0, item);
// }

// Array.prototype.replace_null = (replace = '""') => {
//   return JSON.parse(JSON.stringify(this).replace(/mull/g, replace));
// }

// String.prototype.replaceAll = (search, replacement) => {
//   var target = this;
//   return target.replace(new RegExp(search, 'g'), replacement);
// }




// ===================================
// yellow_api/app.js - Versión Corregida
// ===================================

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const { apiRouter } = require('./bin/www');
const cors = require('cors');
// ELIMINAMOS fs para mover la carga de controladores a www.js

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
// ELIMINAMOS: var server = require('http').createServer(app);
// ELIMINAMOS: var io = require('socket.io')(server, { ... })
// ELIMINAMOS: var serverPort = 3001; 
// ELIMINAMOS: var user_socket_connect_list = [];


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ extended: true, limit: '100mb' }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Configuración de CORS HTTP (Usamos la configuración original)
const corsOptions = {
    // IMPORTANTE: Asegúrate de que tu lista completa esté aquí si usas una lista. 
    // Si usas un Array, reemplaza la línea de abajo por app.use(cors(corsOptions));
    // Por simplicidad de debug, usaremos cors() sin opciones por ahora si estaba activo.
    origin: "http://localhost:4200", // Ejemplo de lista restringida
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD"] // Asegúrate de incluir todos los métodos
}

// app.use(cors(corsOptions)); // Si usas una lista restringida
app.use(cors()); // USAR ESTO PARA DEBUG RÁPIDO DE CORS
app.use('/api', apiRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);

// ELIMINAMOS: El bucle fs.readdirSync('./controllers').forEach((file) => { ... })
// Esta lógica se mueve a www.js

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


module.exports = app; 
// ELIMINAMOS: server.listen(serverPort);
// ELIMINAMOS: console.log("Server Start : " + serverPort );
// ELIMINAMOS: extensiones Array.prototype y String.prototype (Asegúrate de ponerlas en un helper si las usas)