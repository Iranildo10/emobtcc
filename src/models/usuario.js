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

    type: {
            type: String,
            
        },

    value: {
            type: String,
            
        }
       
    /*
    imoveis:[{
        type: Schema(

        )
    }],
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
    */ 
    
});

module.exports = mongoose.model('Usuario', schema);
