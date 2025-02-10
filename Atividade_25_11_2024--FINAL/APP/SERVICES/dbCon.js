
var mysql = require("mysql")
const config = require("../properties.json")

const con = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database
})
console.log(config)
con.connect(function(err){
    if(err){
        console.log("ERRO NO DB")
        return;
    }
    console.log("Conectado")
})


module.exports = con