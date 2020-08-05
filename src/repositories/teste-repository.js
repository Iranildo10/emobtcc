'use strict';

const mongoose = require('mongoose');
const Teste = mongoose.model('Teste');

exports.create = async(data) => {
    var teste = new Teste(data);
    await teste.save();
}