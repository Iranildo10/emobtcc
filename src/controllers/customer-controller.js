'use strict'

const ValidationContract = require('../validators/fluent-validator');
const repository = require('../repositories/customer-repository');
const azure = require('azure-storage');
const guid = require('guid');
var config = require('../config');

// cadastrar cliente
exports.post = async (req, res, next) => {

    let contract = new ValidationContract();

    contract.hasMinLen(req.body.name, 2, 'O nome deve conter no mínimo 2 caracteres');

    //contract.cpfIsValid(req.body.cpf, 'CPF inválido');

    contract.isEmail(req.body.email,'E-mail inválido');

    contract.hasMinLen(req.body.password, 6, 'A senha deve conter no mínimo 6 caracteres');

    if(!contract.isValid()){
        res.status(400).send(contract.errors()).end();
        return;
    }

    try {

        // Cria o Blob Service
        const blobSvc = azure.createBlobService(config.containerConnectionString);

        let filename = guid.raw().toString() + '.png';
        let rawdata = req.body.image;
        let matches = rawdata.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
        let type = matches[1];
        let buffer = new Buffer(matches[2], 'base64');

        // Salva a imagem
        await blobSvc.createBlockBlobFromText('customer-images', filename, buffer, {
            contentType: type
        }, function (error, result, response) {
            if (error) {
                filename = 'default-customer.png'
            }
        });


        await repository.create({
            name: req.body.name,
            cpf: req.body.cpf,
            cel: req.body.cel,
            tel: req.body.tel,
            email: req.body.email,
            password: req.body.password,
            image: 'https://emob.blob.core.windows.net/customer-images/' + filename
        }
        );

        res.status(201).send({ 
            message: 'Cliente cadastrado com sucesso!'
        });

    } catch (e) {
        res.status(400).send({ 
            message: 'Falha ao cadastrar Cliente', 
            data: e.toString()
        });
    }

};

exports.get = async (req, res, next) =>{
    try {
        var data = await repository.get();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição',
            data: error
        });
        
    }
};