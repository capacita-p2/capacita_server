const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

//O APP VAI USAR O BODYPARSER PARA INTERPRETAR PARÂMETROS DE ROTA E REQUISÇÃO
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json()) //PARA TRABALHAR O CONTEÚDO EM FORMATO JSON
app.use(cors()) //EVITA ERRO DE REFERÊNCIA CRUZADA UTILIZANDO PERSISTÊNCIA LOCAL

//IMPORTAÇÃO DOS ARQUIVOS DE ROTAS
const routesUsuario             = require('./src/routes/usuarioRoutes.js')
const routesUsuarioPcd          = require('./src/routes/usuarioPcdRoutes.js')
const routesInstituicao         = require('./src/routes/instituicaoRoutes.js')
const routesEstados             = require('./src/routes/estadosRoutes.js')
const routesUsuarioDeficiencia  = require('./src/routes/usuarioDeficienciaRoutes.js')

//REPASSE DE INSTÂNCIA DO EXPRESS PARA AS ROTAS
routesUsuario(app)
routesUsuarioPcd(app)
routesInstituicao(app)
routesEstados(app)
routesUsuarioDeficiencia(app)

//ROTA RAIZ
app.route('/')
    .get((req, res) => {
        res.send('API ToDoList funcionando!')
    })

//ROTA PADRÃO 3000    
const port = process.env.PORT || 3000
app.listen(port)

console.log("Servidor funcionando na porta: ", port)

