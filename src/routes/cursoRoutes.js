module.exports = function (app) {
    const curso = require('../controller/cursoController.js')
    app.route('/curso')
        .get(curso.listAll)
        .post(curso.createOne)
}