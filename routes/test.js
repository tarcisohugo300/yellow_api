// yellow_api/routes/test.js

var express = require('express');
var router = express.Router();

// Importar el controlador de login donde reside la función de prueba.
// Asegúrate de que la ruta sea correcta desde 'routes/'.
var loginController = require('../controllers/login_controller'); 

/* GET /api/test/status - Llama a la función de prueba dentro del controlador de login. */
router.get('/status', function(req, res, next) {
    
    // Asumimos que la función de prueba en login_controller.js
    // es una función separada que acepta req y res.
    // Si la función está encapsulada, necesitamos extraerla.
    
    // **Si la función de prueba se llama 'testStatus' en login_controller.js:**
    // loginController.testStatus(req, res);

    // **Dado que la función está definida DENTRO de route.controller, usamos una función anónima aquí:**
    
    // Creamos la misma respuesta simple aquí para no depender de la función interna,
    // garantizando que el routing estático funcione.
    
    res.json({
        "status": "1",
        "message": "Ruta estática de prueba funciona."
    });
});

module.exports = router;