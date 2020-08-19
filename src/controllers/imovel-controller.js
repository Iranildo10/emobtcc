'use strict'

const repository = require('../repositories/imovel-repository');


/** 
 * 
 * // cadastrar imovel
exports.post = async (req, res, next) => {

    try {
        await repository.create({
            tipo_imovel: req.body.tipo_imovel,
            tipo_anuncio: req.body.tipo_anuncio,
            imagens: req.body.imagens,
            valor: req.body.valor,
            avaliacao: req.body.avaliacao,
            comodos: req.body.comodos,
            endereco: req.body.endereco
        }
        );

        res.status(201).send({ 
            message: 'Imovel cadastrado com sucesso!'
        });

    } catch (e) {
        res.status(400).send({ 
            message: 'Falha ao cadastrar Imovel', 
            data: e.toString()
        });

        console.log(e)
    }

};

*/

