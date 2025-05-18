const express = require('express');
const router = express.Router();
// Ruta para vista de Asistencias del Cliente
router.get('/asistenciasCliente', function(req, res) {
    res.render('asistenciasCliente');// Renderiza la vista EJS llamada asistenciasCliente.ejs
});

module.exports = router;