const Instituicao = require('../models').Instituicao
const Usuario = require('../models').Usuario
const Curso = require('../models').Curso 
const Tipo_deficiencia = require('../models').Tipo_deficiencia

exports.listAll = (req, res) => {
    Instituicao.findAll ({
        include:[
            {
                model: Curso, 
                include: [
                    {model: Tipo_deficiencia},
                ] 
            }
        ]
    }).then(instituicao => {
        res.send(instituicao) 
    }).catch(err => {
        res.send(err)
    })
}

exports.createOne = (req, res) => {
    let {nome, telefone, endereco, numero, bairro, cidade, id_estado, id_usuario, cep, cnpj, ativo, email, senha, tipo} = req.body
    Usuario.create({email, senha, ativo, tipo})
    .then(usuario => {
        id_usuario = usuario.id
        Instituicao.create({nome, telefone, endereco, numero, bairro, cidade, id_estado, id_usuario, cep, cnpj, ativo})
        .then (instituicao => {
            res.send(instituicao)
        }).catch(err => {
            res.send(err)
        })
    }).catch(err => {
        res.send(err)
    })

}