'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/imovel-controller');


//Cadastrar imovel
router.post('/', controller.post);


module.exports = router;