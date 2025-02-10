const {selectService, insertService} = require("../SERVICES/userService.js")

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
        console.log(req.body)
        const resp = await insertService(req.body.nome, req.body.data_criacao)

        if(resp!=undefined){
            res.status(200).json(resp)

        }else{
            res.status(200).json("Operação realizada com sucesso")

        }
    }catch(error){
        res.status(500).json("Erro ao fazer operação crud")
    }
}


module.exports = {selectController, insertController}