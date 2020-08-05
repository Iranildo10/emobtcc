'use strict'


const repository = require('../repositories/teste-repository');


exports.post = async (req, res, next) => {

    try {
        await repository.create({
            teste: req.body.teste,
        }
        );

        res.status(201).send({ 
            message: 'Sucesso!'
        });

    } catch (e) {
        res.status(400).send({ 
            message: 'Falha', 
            data: e.toString()
        });

        console.log(e)
    }

};



