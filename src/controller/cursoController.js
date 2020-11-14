const Curso = require('../models').Curso

exports.listAll = (req, res) => {
    Curso.findAll ({order: [['id', 'DESC']]})
    .then(cursos => {
        res.send(cursos)
    }).catch(err => {
        res.send(err)
    })
}

exports.createOne = (req, res) => {
    let{id_instituicao, nome_curso, id_deficiencia, duracao, carga_horaria, horario, valor, ativo, resumo, descricao, url_img} = req.body
    Curso.create ({id_instituicao, nome_curso, id_deficiencia, duracao, carga_horaria, horario, valor, ativo, resumo, descricao, url_img})
    .then(curso => {
        res.send(curso)
    }).catch (err => {
        res.send(err)
    })
}