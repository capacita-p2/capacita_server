exports.listAll = (req, res) => {
    let usuarios = [
        {
            nome: 'teste 01',
            email: 'teste01@teste.com.br'
        },
        {
            nome: 'teste 02',
            email: 'teste02@teste.com.br'
        }
    ]
    res.send(usuarios)  
}

exports.createOne = (req, res) => {
    let resposta = {
        message : 'Usuario criado com sucesso',
        data: req.body
    }
    res.send(resposta)
}