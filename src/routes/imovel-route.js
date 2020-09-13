'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/imovel-controller');


//Cadastrar imovel
router.post('/', controller.post);

//Atualizar imovel
router.put('/', controller.update);

//Pesquisar por Cidade
router.get('/', controller.getByCidade);

//Pesquisar todos
router.get('/', controller.get);

//Pesquisar por usuario que cadastrou o imovel
router.get('/', controller.getByUserId);


module.exports = router;