'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/imovel-controller');


//Cadastrar imovel
router.post('/', controller.post);

//Atualizar imovel
router.put('/', controller.update);

//Pesquisar por cidade 
router.get('/', controller.getByCidade);


module.exports = router;