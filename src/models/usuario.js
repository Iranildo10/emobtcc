'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const identificacao = require('../models/identificacao');
const imovel = require('../models/imovel');


const schema = new Schema({
    provider:{
        type: Boolean,
        
    },
    nome:{
        type: String,
        
    },
    email: {
        type: String,
        
    },
    celular: {
        type: String,
       
    },
    telefone: {
        type: String,
        
    },
    
    senha: {
        type: String,
        
        
    },
    identificacao:{
        type: Schema({
            type:{
                type: String,
                required: true
            },
            value:{
                type: String,
                required: true
            }
        })
    },
    imagem: {
        type: String,
        
    },

    /*
    imoveis:[{
        type: Schema(

        )
    }]
    */ 
    

});

module.exports = mongoose.model('Usuario', schema);
