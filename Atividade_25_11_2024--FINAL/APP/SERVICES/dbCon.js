
var mysql = require("mysql")

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "banco"
})

con.connect(function(err){
    if(err){
        console.log("ERRO NO DB")
        return;
    }
    console.log("Conectado")
})


module.exports = con