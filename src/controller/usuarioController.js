const Usuario = require('../models/').Usuario

exports.listAll = (req, res) => {
    Usuario.findAll().then(usuarios => {
        res.send(usuarios)
    }).catch(error => {
        res.send(error)
    })
}

exports.createOne = (req, res) => {
    const {email, senha, tipo, ativo} = req.body
    Usuario.create({email, senha, tipo, ativo}).then(usuario => {
        res.send(usuario)
    }).catch(err => {
        res.send(err)
    })
}