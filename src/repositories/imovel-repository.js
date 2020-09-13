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

//Pesquisar por cidade
exports.getByCidade = async(cidade) => {
    var res = await Imovel.find({
        cidade: cidade
    }
    );
    return res;
}

//Pesquisar todos
exports.get = async() => {
    var res = await Imovel.find({
    }
    );
    return res;
}


