const express = require('express');
const router = express.Router();
// Ruta para vista de Membresias del Cliente
router.get('/membresiasCliente', function(req, res) {
    res.render('membresiasCliente');// Renderiza la vista EJS llamada membresiasCliente.ejs
});

module.exports = router;