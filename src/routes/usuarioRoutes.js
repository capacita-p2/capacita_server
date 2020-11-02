module.exports = function (app) {
    const usuario = require('../controller/usuarioController.js')
    app.route('/usuario')
        .get(usuario.listAll)
        .post(usuario.createOne)
    app.route('/usuario-login')
        .post(usuario.findOne)
    

}