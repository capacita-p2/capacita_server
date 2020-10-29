const UsuarioPcd = require('../models').Usuario_pcd
const Usuario = require('../models').Usuario

exports.listAll = (req, res) => {
    UsuarioPcd.findAll ().then(usuariosPcd => {
        res.send(usuariosPcd) 
    }).catch(err => {
        res.send(err)
    })
}

exports.createOne = (req, res) => {
    let {nome, telefone, endereco, numero, bairro, cidade, id_estado, id_usuario, cep, cpf, ativo, email, senha, tipo} = req.body
    Usuario.create({email, senha, ativo, tipo})
    .then(usuario => {
        id_usuario = usuario.id
        UsuarioPcd.create({nome, telefone, endereco, numero, bairro, cidade, id_estado, id_usuario, cep, cpf, ativo})
        .then (usuarioPcd => {
            res.send(usuario.Usuario)
            res.send(usuario.UsuarioPcd)
        }).catch(err => {
            res.send(err)
        })
    }).catch(err => {
        res.send(err)
    })

}