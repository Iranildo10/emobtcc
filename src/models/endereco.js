'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    logradouro:{
        type: String,
        required: true,
       
    },
    numero: {
        type: Number,
        required: true,
        
    },
    cep: {
        type: String,
        required: true,
        trim: true
    },
    bairro:{
        type: String,
        required: true
    },
    cidade:{
        type: String,
        required: true,
        default: true
    },
    uf:{
        type: String,
        required:true
    },
    latitude:{
        type: String,
        required: true,
       
    },
    longitude:{
        type: String,
        required: true,
       
    }

});

module.exports = mongoose.model('Endereco', schema);