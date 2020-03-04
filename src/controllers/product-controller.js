'use strict'

const ValidationContract = require('../validators/fluent-validator');
const repository = require('../repositories/product-repository');

// Consultar todos
exports.get = async(req, res, next) => {

    try {
        var data = await  repository.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

// Consultar pelo Slug
exports.getBySlug = async (req, res, next) => {
    
    try {
        var data = await repository.getBySlug(req.params.slug);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

// Consultar pelo Id
exports.getById = async (req, res, next) => {
    
    try {
        var data = await repository.getById(req.params.id);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

// Consultar pela tag
exports.getByTag = async (req, res, next) => {

    try {
        var data = await repository.getByTag(req.params.tag);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
    
  
};

// Cadastrar Produto
exports.post = async (req, res, next) => {

    let contract = new ValidationContract();

    contract.hasMinLen(req.body.title, 3, 'O titulo deve conter no mínimo 3 caracteres');

    contract.hasMinLen(req.body.slug, 3, 'O slug deve conter no mínimo 3 caracteres');

    contract.hasMinLen(req.body.description, 3, 'A descrição deve conter no mínimo 3 caracteres');

    if(!contract.isValid()){
        res.status(400).send(contract.errors()).end();
        return;
    }

    try {
        await repository.create(req.body);
        res.status(201).send({ 
            message: 'Produto cadastrado com sucesso!'
        });

    } catch (e) {
        res.status(400).send({ 
            message: 'Falha ao cadastrar produto', 
            data: e
        });
    }

};


// Atualizar produto
exports.put = async(req, res, next) => {

    try {
        await repository.update(req.params.id, req.body);
        res.status(200).send({
            message: "Produto atualizado com sucesso!"
        });
    } catch (e) {
        res.status(400).send({
            message: "Falha ao atulizar produto",
            data: e
        });
    }
    
};

// Deletar produto

exports.delete = async(req, res, next) => {

    try {
        await repository.delete(req.body.id);
        res.status(200).send({
            message: "Produto excluido com sucesso!"
        });
    } catch (error) {
        res.status(400).send({
            message: "Falha ao excluir produto",
            data: e
        });
    }
};
