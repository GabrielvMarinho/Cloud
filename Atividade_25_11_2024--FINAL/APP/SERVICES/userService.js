const {selectRepository, insertRepository} = require("../REPOSITORY/userRepository")
const userDTO = require("../DTOs/userDTOs")
const userModel = require("../MODEL/userModel")

async function selectService(){
    //the sql command and the dto are defined here because they correlate to the business logic
    var sql = `SELECT * FROM usuario`;

    const users = await selectRepository(sql)
    var usersDTOs = [];
    for(var i=0; i<users.length; i++){
        var userdto = new userDTO(users[i].id, users[i].nome) 
        usersDTOs.push(userdto)
    }
    console.log(usersDTOs)
    return usersDTOs
}

async function insertService(nome, data_criacao){
    var sql = `INSERT INTO usuario(nome, data_criacao) values ("${nome}", "${data_criacao}")`;
    const resp = await insertRepository(sql)
    return resp
}

module.exports = {selectService, insertService};
