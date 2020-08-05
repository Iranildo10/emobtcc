'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    
    imagem: {
        type: String,
        
    },

    /*

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


    imoveis:[{
        type: Schema(

        )
    }]
    */ 
    

});

module.exports = mongoose.model('Usuario', schema);
