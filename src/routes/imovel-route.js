'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/imovel-controller');


//Cadastrar imovel
router.post('/', controller.post);

//Atualizar imovel
router.put('/', controller.update);

router.get('/', controller.getByCidade);

router.get('/', controller.get);


module.exports = router;