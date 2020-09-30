const express = require('express')
const bodyParser = require('body-parser')

const app = express()

//O APP VAI USAR O BODYPARSER PARA INTERPRETAR PARÂMETROS DE ROTA E REQUISÇÃO
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json()) //PARA TRABALHAR O CONTEÚDO EM FORMATO JSON

const routes = require('./src/routes/usuarioRoutes.js')
routes(app)

app.route('/')
    .get((req, res) => {
        res.send('API ToDoList funcionando!')
    })

const port = process.env.PORT || 3000
app.listen(port)

console.log("Servidor funcionando na porta: ", port)

