module.exports = function (app) {
    const usuarios = require('../controller/usuarioController.js')
    app.route('/usuarios')
        .get(usuarios.listAll)
        .post(usuarios.createOne)

}