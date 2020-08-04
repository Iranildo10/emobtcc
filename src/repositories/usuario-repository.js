'use strict';

const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');

/*
exports.get = async() => {
    var res = await Customer.find({
    }, 'name email password image');
    return res;
}
*/ 

exports.get = async() => {
    var res = await Usuario.find({});
    return res;
}

exports.create = async(data) => {
    var usuario = new Usuario(data);
    await usuario.save();
}

exports.login = async(email, senha) => {
    var res = await Usuario.find({
        email: email,
        senha: senha
    });
    return res;
}


