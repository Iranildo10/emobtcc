'use strict';

const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');


exports.update = async(filter, update) => {
    var res = await Usuario.findByIdAndUpdate(filter, update);
    return res;
}


exports.create = async(data) => {
    var usuario = new Usuario(data);
    await usuario.save();
}


exports.get = async() => {
    var res = await Usuario.find({});
    return res;
}


exports.login = async(email, senha) => {
    var res = await Usuario.find({
        email: email,
        senha: senha
    });
    return res;
}

exports.getByEmailAndCpf = async(email, value) => {
    var res = await Usuario.find({
        email: email,
        value: value
    });
    return res;
}

exports.remove = async(user_id) => {
    await Usuario.findOneAndRemove(user_id);
}


