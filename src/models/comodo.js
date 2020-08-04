'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    nome:{
        type: String,
        required: true
    },
    photo:{
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Comodo', schema);