const express = require('express');
const router = express.Router();
// Ruta para vista de Gestion de Asistencias del administrador
router.get('/gestionAsistencias', function(req, res) {
    res.render('gestionAsistencias');// Renderiza la vista EJS llamada gestionAsistencias.ejs
});

module.exports = router;