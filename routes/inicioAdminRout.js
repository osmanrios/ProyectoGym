const express = require('express');
const router = express.Router();
// Ruta para vista de inicio del administrador
router.get('/inicioAdmin', function(req, res) {
    res.render('inicioAdmin');// Renderiza la vista EJS llamada inicioAdmin.ejs
});

module.exports = router;
