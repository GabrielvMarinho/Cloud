const selectRepository = require("../REPOSITORY/userRepository")
const userDTO = require("../DTOs/userDTOs")

async function selectService(con){
    //the sql command and the dto are defined here because they correlate to the business logic
    var sql = `SELECT * FROM usuario`;

    const users = await selectRepository(con, sql)
    var usersDTOs = [];
    for(var i=0; i<users.length; i++){
        var userdto = new userDTO(users[i].id, users[i].nome) 
        usersDTOs.push(userdto)
    }
    console.log(usersDTOs)
    return usersDTOs
}


module.exports = selectService;
