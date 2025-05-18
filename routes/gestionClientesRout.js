const express = require('express');
const router = express.Router();
// Ruta para vista de Gestion de Clientes del administrador
router.get('/gestionClientes', function(req, res) {
    res.render('gestionClientes');// Renderiza la vista EJS llamada gestionClientes.ejs
});

module.exports = router;
