'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/product-controller');


//Buscar informações
router.get('/', controller.get);

//Buscar por slug
router.get('/:slug', controller.getBySlug);

//Buscar por id
router.get('/admin/:id', controller.getById);

//Buscar por tag
router.get('/tags/:tag', controller.getByTag);

//Enviar informações
router.post('/', controller.post);

//Editar informações
router.put('/:id', controller.put);

//Deletar informações
router.delete('/', controller.delete);

module.exports = router;