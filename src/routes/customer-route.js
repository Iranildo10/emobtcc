'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/customer-controller');

//teste
//Enviar informações
router.post('/', controller.post);

//Buscar informações
router.get('/', controller.get);

module.exports = router;