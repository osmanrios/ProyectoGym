const express = require('express');
const router = express.Router();
// Ruta para vista de Gestion de Membresias del administrador
router.get('/gestionMembresias', function(req, res) {
    res.render('gestionMembresias');// Renderiza la vista EJS llamada gestionMembresias.ejs
});

module.exports = router;