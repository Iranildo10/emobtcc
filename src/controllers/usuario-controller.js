'use strict'

//const ValidationContract = require('../validators/fluent-validator');
const repository = require('../repositories/usuario-repository');
const azure = require('azure-storage');
const guid = require('guid');
var config = require('../config');
const md5 = require('md5');


// cadastrar usuario
exports.post = async (req, res, next) => {

    try {


        /**
         * // Cria o Blob Service
        const blobSvc = azure.createBlobService(config.containerConnectionString);

        let filename = guid.raw().toString() + '.jpg';
        let rawdata = req.body.imagem;
        let matches = rawdata.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
        let type = matches[1];
        let buffer = new Buffer(matches[2], 'base64');

        // Salva a imagem
        await blobSvc.createBlockBlobFromText('usuarios', filename, buffer, {
            contentType: type
        }, function (error, result, response) {
            if (error) {
                filename = 'default-usuario.png'
            }
        });
        
         */
        
        
        //+ filename
        
        await repository.create({
            provider: req.body.provider,
            nome: req.body.nome,
            email: req.body.email,
            celular: req.body.celular,
            telefone: req.body.telefone,
            senha: md5(req.body.senha + global.SALT_KEY),
            identificacao: req.body.identificacao,
            //imagem: 'https://emob.blob.core.windows.net/usuarios/' 
            imagem: req.body.imagem
        }
        );

        res.status(201).send({ 
            message: 'Usuario cadastrado com sucesso!'
        });

    } catch (e) {
        res.status(400).send({ 
            message: 'Falha ao cadastrar Usuario', 
            data: e.toString()
        });

        console.log(e)
    }

};

// Login
exports.login = async(req, res, next) => {
    try{

        var data = await repository.login(req.body.email, md5(req.body.senha + global.SALT_KEY));
        
        if(data != ""){
            res.status(201).send({
                error: 0,
                message: "Usuario logado com sucesso!",
                usuario: data
              });
        }
        else
        res.status(400).send({
            error: 400,
            message: 'Não foi possível logar',
            except: e.toString()
        });

    } catch (e) {
        res.status(400).send({
            error: 400,
            message: 'Verifique e-mail ou senha',
            except: e.toString()
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