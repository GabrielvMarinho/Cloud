const express = require("express");
var mysql = require("mysql")

//starting the app
const app = express()
//instructing the app to listen to this port
app.listen(3000)
app.use(express.json())

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "banco"
})

con.connect(function(err){
    if(err){
        console.log("ERRO NO DB")
        return;
    }
    console.log("Conectado")
})



/**
    ░█████╗░██████╗░██╗░░░██╗██████╗░
    ██╔══██╗██╔══██╗██║░░░██║██╔══██╗
    ██║░░╚═╝██████╔╝██║░░░██║██║░░██║
    ██║░░██╗██╔══██╗██║░░░██║██║░░██║
    ╚█████╔╝██║░░██║╚██████╔╝██████╔╝
    ░╚════╝░╚═╝░░╚═╝░╚═════╝░╚═════╝░
 */



//SELECT
app.get("/select", async(req, res) =>{
    try{
        var sql = `SELECT * FROM usuario`;  
        con.query(sql, function (err, result) {  
            console.log(result)
            res.status(200).json(result)  
        })
    }catch(error){
        res.status(500).json("Erro ao fazer operação crud")
    }
})

app.get("/select/:id", async(req, res) =>{
try{
    var sql = `SELECT * FROM funcionarios WHERE ID = ?`;  
    con.query(sql,[ req.params.id], function (err, result) {  
        res.status(200).json({"Select":result})  
    })
}catch(error){
    res.status(500).json("Erro ao fazer operação crud")
}
})


//UPDATE
app.put("/update/:id", async(req, res) =>{
try{
    const newUser = req.body
    var sql = `
    UPDATE funcionarios 
    SET nome = ?, 
    idade = ?, 
    salario = ?
    WHERE id = ?
    `;  
    con.query(sql, [newUser.nome, newUser.idade, parseFloat(newUser.salario), req.params.id], function (err, result) {  
        res.status(200).json("Atualizado com sucesso")  
    })
}catch(error){
    res.status(500).json("Erro ao fazer operação crud")
}

})

//DELETE
app.delete("/delete/:id", async(req, res) =>{
try{
    var sql = `DELETE FROM funcionarios WHERE ID = ?`;  
    con.query(sql, [parseInt(req.params.id)], function (err, result) {  
        res.status(200).json("Deletado com sucesso")  
    })
}catch(error){
    res.status(500).json("Erro ao fazer operação crud")
}
})

//CREATE
app.post("/create", async(req, res) =>{
try{
    var sql = `INSERT INTO funcionarios (nome, idade, salario, data_criacao)
    values(?, ?, ?, ?)`;  
    con.query(sql, [req.body.nome, req.body.idade, req.body.salario, req.body.data_criacao], function (err, result) {  
        res.status(200).json("Criado com sucesso")  
    })
}catch(error){
    res.status(500).json("Erro ao fazer operação crud")
}
})