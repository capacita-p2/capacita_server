const Inscricao  = require('../models/').Inscricao
const Curso      = require('../models').Curso
const UsuarioPcd = require('../models/').Usuario_pcd

exports.listAll = (req, res) => {
    Inscricao.findAll().then (response => {
        res.send(response)
    }).catch (err => {
        res.send(err)
    })
}

exports.listCursoInscritos = (req, res) => {
    const {id_curso} = req.body
    Curso.findOne({
        where: id_curso, 
        include: {
            model: UsuarioPcd
        }
    }).then(response => {
        res.send(response)
    }).catch (err => {
        res.send(err)
    })
}

exports.listInscritoCursos= (req, res) => {
    const {id_usuario_pcd} = req.body
    UsuarioPcd.findOne({
        where: id_usuario_pcd, 
        include: {
            model: Curso
        }
    }).then(response => {
        res.send(response)
    }).catch (err => {
        res.send(err)
    })
}

exports.createOne = (req, res) => {
    const {id_usuario_pcd, id_curso} = req.body
    Inscricao.create({id_usuario_pcd, id_curso}).then(response => {
        res.send(response)
    }).catch(err => {
        res.send(err)
    })     
}

