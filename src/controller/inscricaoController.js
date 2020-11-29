const Inscricao  = require('../models/').Inscricao
const Curso      = require('../models').Curso
const UsuarioPcd = require('../models/').Usuario_pcd
const TipoDeficiencia = require('../models').Tipo_deficiencia
const UsuarioTipoDeficiencia = require('../models').Usuario_tipo_deficiencia

exports.listAll = (req, res) => {
    Inscricao.findAll().then (response => {
        res.send(response.data)
    }).catch (err => {
        res.send(err)
    })
}

exports.verificarInscricao = (req, res) => {
    const {id_usuario_pcd, id_curso} = req.body
    let usuarioPcdDb = null
    let cursoDb = null

    let response = {
        message: '',
        liberado: false
    }

    // BUSCAR USUÁRIO PCD DO BANCO
    UsuarioPcd.findOne({
        where: {
            id: id_usuario_pcd
        }
    }).then(usuario => {
        usuarioPcdDb = usuario
    }).catch(err => {
        res.send(err)
    })

    //BUSCAR CURSO DO BANCO
    Curso.findOne({
        where: {
            id: id_curso
        }
    }).then(curso => {
        cursoDb = curso
    }).catch(err => {
        res.send(err)
    })

    // VERIFICAR SE INSCRIÇÃO JÁ EXISTE
    Inscricao.findOne({
        where: {
            id_usuario_pcd,
            id_curso    
        }
    }).then(inscricao => {
        if(inscricao == null) {
            response.message = 'Verificação: Usuário ainda não escrito no curso, liberado!'
            response.liberado = true
            res.send(response)
        } else {
            response.message = 'Inscrição já realizada, não pode se inscrever novamente.'
            response.Inscricao = inscricao
            res.send(response)
        }
    }).catch(err => {
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

exports.createOne = async (req, res) => {
    const {id_usuario_pcd, id_curso} = req.body
    let response = {
        message: '',
        liberado: false
    }

    let usuarioPcdDb = null
    let cursoDb = null
    let UsuarioTipoDeficienciaDb = null

    // BUSCAR USUÁRIO PCD DO BANCO
    await UsuarioPcd.findOne({
        where: {id: id_usuario_pcd},
        include: {model: TipoDeficiencia}
    }).then(usuario => {
        usuarioPcdDb = usuario
    }).catch(err => {
        res.send(err)
    })

    //BUSCAR CURSO DO BANCO
    await Curso.findOne({
        where: {
            id: id_curso
        }
    }).then(curso => {
        cursoDb = curso
    }).catch(err => {
        res.send(err)
    })

    // VERIFICAR SE INSCRIÇÃO JÁ EXISTE
    await Inscricao.findOne({
        where: {
            id_usuario_pcd,
            id_curso    
        }
    }).then(inscricao => {
        if(inscricao == null) {
            response.message = 'Inscrição realizada com sucesso!'
            response.liberado = true
            res.send(response)
        } else {
            response.message = 'Inscrição já realizada, não pode se inscrever novamente.'
            response.Inscricao = inscricao
            res.send(response)
        }
    }).catch(err => {
        res.send(err)
    })

    // //BUSCAR USUARIO TIPOS DE DEFICIÊNCIA
    // await UsuarioTipoDeficiencia.findAll({
    //     where: {
    //         id_usuario_pcd
    //     }
    // }).then(usuarioDeficiencia => {
    //     usuarioTipoDeficienciaDb = usuarioDeficiencia
    // }).catch(err => {
    //     res.send(err)
    // })

    // // CHECAGEM COMBINAÇÃO DEFICIÊNCIA E CURSO
    // console.log('>>>>>>>>>>>>> ' + usuarioTipoDeficienciaDb)
    // for(var deficiencia in usuarioTipoDeficienciaDb) {
    //     console.log('______________ ' + deficiencia.id_usuario_pcd)
    //     if(deficiencia.id_tipo_deficiencia == cursoDb.id_deficiencia) {
    //         response.liberado = true
    //     } else {
    //         response.message = "O Curso não está habilitado para sua deficiẽncia."
    //     }
    // }

    if(response.liberado) {
        await Inscricao.create({id_usuario_pcd, id_curso}).then(inscricao => {
            response.message = 'Inscrição efetuada com sucesso!'
            response.Inscricao = inscricao.data
            res.send(response)
        }).catch(err => {
            res.send(err)
        })  
    } else {
        res.send(response)
    }
      
}

