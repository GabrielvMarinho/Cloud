const selectService = require("../SERVICES/userService.js")
const con = require("../SERVICES/dbCon.js")

async function selectController(req, res){
    try{
        const userSTOs = await selectService(con)
        var texto = ""
        for(var i=0;  i<userSTOs.length; i++){
            texto += "| id: "+userSTOs[i].id + " - nome: "+ userSTOs[i].nome
        }
        res.status(200).json(texto)
    }catch(error){
        res.status(500).json("Erro ao fazer operação crud")
    }
}

module.exports = selectController