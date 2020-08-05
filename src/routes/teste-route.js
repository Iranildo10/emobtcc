const express = require('express');
const router = express.Router();
const controller = require('../controllers/teste-controller');


//Enviar informações
router.post('/', controller.post);