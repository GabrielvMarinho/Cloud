const express = require("express")
const axios = require('axios')

const app = express()
const PORT = 3000
app.listen(PORT)

var mysql = require('mysql'); 
app.use(express.json());


var con = null

app.get("/connect", async(req, res) =>{
    try{
        con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "banco"
        
        })
        con.connect(function(err){
            
            res.status(200).json("Conectado ao DB")
        })
    }catch(error){
        res.status(500).json("Erro ao conectar")
    }
    
})
app.get("/disconnect", async(req, res) =>{
    try{
        con.end(function(err){
            if(err){
                res.status(500).json("Erro ao conectar")

            }
            res.status(200).json("Desconectado do DB")
        })
    }catch(error){
        res.status(500).json("Erro ao conectar")
    }
    
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
            var sql = `SELECT * FROM funcionarios`;  
            con.query(sql, function (err, result) {  
                res.status(200).json({"Select":result})  
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