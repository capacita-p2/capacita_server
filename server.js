const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

//O APP VAI USAR O BODYPARSER PARA INTERPRETAR PARÂMETROS DE ROTA E REQUISÇÃO
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json()) //PARA TRABALHAR O CONTEÚDO EM FORMATO JSON
app.use(cors()) //EVITA ERRO DE REFERÊNCIA CRUZADA UTILIZANDO PERSISTÊNCIA LOCAL

const routesUsuario = require('./src/routes/usuarioRoutes.js')
const routesUsuarioPcd = require('./src/routes/usuarioPcdRoutes.js')

routesUsuario(app)
routesUsuarioPcd(app)

app.route('/')
    .get((req, res) => {
        res.send('API ToDoList funcionando!')
    })

const port = process.env.PORT || 3000
app.listen(port)

console.log("Servidor funcionando na porta: ", port)

