'use strict'

const express = require('express');
const router = express.Router();

//Obter informações
router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Emob APP API",
        version: "0.0.2"
    });
});

module.exports = router;