module.exports = function (app) {
    const usuarioDeficienciaController = require('../controller/usuarioDeficienciaController.js')
    app.route('/usuarioDeficiencia')
        .post(usuarioDeficienciaController.findAll)
    app.route('/usuarioDeficienciaCreate')
        .post(usuarioDeficienciaController.bulkCreate)
    
}