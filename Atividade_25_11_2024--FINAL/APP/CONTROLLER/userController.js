const { deleteRepository } = require("../REPOSITORY/userRepository.js")
const {selectService, insertService, updateService, deleteService} = require("../SERVICES/userService.js")

async function selectController(req, res){
    try{
        const userDTOs = await selectService()
        var texto = ""
        for(var i=0;  i<userDTOs.length; i++){
            texto += "| id: "+userDTOs[i].id + " - nome: "+ userDTOs[i].nome
        }
        res.status(200).json(texto)
    }catch(error){
        res.status(500).json("Erro ao fazer operação crud")
    }
}

async function insertController(req, res){
    try{
        console.log(req.body.nome)

        if(req.body.nome && req.body.data_criacao){
            insertService(req.body.nome, req.body.data_criacao)

            res.status(200).json("Operação realizada com sucesso")

        }else{
            res.status(200).json("dados faltando")

        }
    }catch(error){
        res.status(500).json("Erro ao fazer operação crud")
    }
}

async function updateController(req, res){
    try{
        console.log(req.body.nome)

        if(req.body.id && req.body.nome && req.body.data_criacao){
            updateService(req.body.id, req.body.nome, req.body.data_criacao)

            res.status(200).json("Operação realizada com sucesso")

        }else{
            res.status(200).json("dados faltando")

        }
    }catch(error){
        res.status(500).json("Erro ao fazer operação crud")
    }
}

async function deleteController(req, res){
    try{

        if(req.body.id){
            deleteService(req.body.id)

            res.status(200).json("Operação realizada com sucesso")

        }else{
            res.status(200).json("dados faltando")

        }
    }catch(error){
        res.status(500).json("Erro ao fazer operação crud")
    }
}




module.exports = {selectController, insertController, updateController, deleteController}