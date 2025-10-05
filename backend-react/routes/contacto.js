const express = require('express');
const router = express.Router();
const { crearContacto, obtenerContactos } = require('../controllers/contactoController');
const { validarContacto } = require('../middleware/validation');

// POST /api/contacto - Crear nuevo contacto
router.post('/', validarContacto, crearContacto);

// GET /api/contacto - Obtener todos los contactos
router.get('/', obtenerContactos);

module.exports = router;