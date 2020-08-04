'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    type:{
        type: String,
        required: true
    },
    value:{
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Identificacao', schema);
