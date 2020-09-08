'use strict';

const mongoose = require('mongoose');
const Imovel = mongoose.model('Imovel');

//Cadastrar Imovel
exports.create = async(data) =>{
    var imovel = new Imovel(data);
    await imovel.save();
}

//Atualizar cadastro do imóvel
exports.update = async(filter, update) => {
    var res = await Imovel.findByIdAndUpdate(filter, update);
    return res;
}

//Pesquisar imóvel por cidade
exports.getByCidade = async(endereco) => {
    var res = await Imovel.find({
        endereco: {
            cidade: endereco.cidade
        }
    });
    return res;
}