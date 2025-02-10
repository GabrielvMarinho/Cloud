
const userModel = require("../MODEL/userModel")
const con = require("../SERVICES/dbCon.js")


async function selectRepository(sql){

    return new Promise(resolve =>{
        con.query(sql, function (err, result) { 
            var array =[]
            console.log(result.length)
            for(var i=0; i<result.length; i++){
                var user = new userModel(result[i].id, result[i].nome, result[i].data_criacao)
                array.push(user)
            }
            resolve(array)
        })

    })
    
}

async function insertRepository(sql){

    return new Promise(resolve =>{

    con.query(sql, function (err, result){
        try{
            if(result.affectedRows>0){
                resolve();
            }
        }catch{
            resolve("dados inconsistentes");

        }
        
        

    })
})
}



module.exports = {selectRepository, insertRepository};
