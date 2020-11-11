const UsuarioPcd = require('../models').Usuario_pcd
const Usuario = require('../models').Usuario
const UsuarioDeficiencia = require('../models').Usuario_tipo_deficiencia

exports.listAll = (req, res) => {
    UsuarioPcd.findAll ().then(usuariosPcd => {
        res.send(usuariosPcd) 
    }).catch(err => {
        res.send(err)
    })
}

exports.createOne = async (req, res) => {
    let {nome, telefone, endereco, numero, bairro, cidade, id_estado, id_usuario, cep, cpf, ativo, email, senha, tipo, deficiencias} = req.body
    Usuario.create({email, senha, ativo, tipo})
    .then(async usuario => {
        id_usuario = usuario.id
        UsuarioPcd.create({nome, telefone, endereco, numero, bairro, cidade, id_estado, id_usuario, cep, cpf, ativo})
        .then (async usuarioPcd => {
            var tiposDeficiencias = []

            for(deficiencia in deficiencias) {
                var dado = {
                    id_usuario_pcd: usuarioPcd.id,
                    id_tipo_deficiencia: Number.parseInt(deficiencia)+1
                }
                tiposDeficiencias.push(dado)
            }

            console.log(tiposDeficiencias)

            UsuarioDeficiencia.bulkCreate(tiposDeficiencias).then(usuarioDeficiencias => {
                usuarioPcd.tiposDeficiencias = usuarioDeficiencias
            }).catch(err => {
                res.send(err)
            })
            usuario.usuarioPcd = usuarioPcd
        }).catch(err => {
            res.send(err)
        })
        res.send(usuario)
    }).catch(err => {
        res.send(err)
    })

}