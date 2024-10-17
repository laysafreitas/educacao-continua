const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// Registrar Usuário
router.post('/registrar', usuarioController.registrarUsuario);

// Login de Usuário
router.post('/login', usuarioController.loginUsuario);

module.exports = router;
