'use strict';

const mongoose = require('mongoose');
const Imovel = mongoose.model('Imovel');

//Cadastrar Imovel
exports.create = async(data) =>{
    var imovel = new Imovel(data);
    await imovel.save();
}