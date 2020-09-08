'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/usuario-controller');


//Cadastrar usuario
router.post('/', controller.post);

//Login
router.post('/login', controller.login);

//Buscar informações
router.get('/', controller.get);

//Atualizar Cadastro
router.put('/', controller.update);

//Remover Cadastro
router.delete('/:id', controller.remove);

module.exports = router;


