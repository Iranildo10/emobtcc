'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/usuario-controller');


//Cadastrar usuario
router.post('/', controller.post);

//Login
router.get('/login', controller.login);

//Buscar informações
router.get('/', controller.get);

module.exports = router;