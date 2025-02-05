
const userModel = require("../MODEL/userModel")


async function selectRepository(con, sql){

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

module.exports = selectRepository;
