const express = require("express")
const axios = require('axios')

const app = express()
const PORT = 3001
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
            database: "imagensDB"
        
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
app.get("/selectImgs", async(req, res) =>{
        try{
            var sql = `SELECT * FROM imagens`;  
            con.query(sql, function (err, result) {  
                res.status(200).json({"Select":result})  
            })
        }catch(error){
            res.status(500).json("Erro ao fazer operação crud")
        }
})

app.get("/selectImg/:id", async(req, res) =>{
    try{
        var sql = `SELECT * FROM imagens WHERE ID = ?`;  
        con.query(sql,[req.params.id], function (err, result) {  
            res.status(200).json({"Select":result})  
        })
    }catch(error){
        res.status(500).json("Erro ao fazer operação crud")
    }
})

//UPDATE
app.put("/updateImg/:id", async(req, res) =>{
    try{
        const newImage = req.body
        console.log(newImage)
        var sql = `
        UPDATE imagens 
        SET referencia = ?, 
        titulo = ?
        WHERE id = ?
        `;  
        con.query(sql, [newImage.referencia, newImage.titulo, req.params.id], function (err, result) {  
            res.status(200).json("Atualizada com sucesso")  
        })
    }catch(error){
        res.status(500).json("Erro ao fazer operação crud")
    }
    
})

//DELETE
app.delete("/deleteImg/:id", async(req, res) =>{
    try{
        var sql = `DELETE FROM imagens WHERE ID = ?`;  
        con.query(sql, [parseInt(req.params.id)], function (err, result) {  
            res.status(200).json("Deletada com sucesso")  
        })
    }catch(error){
        res.status(500).json("Erro ao fazer operação crud")
    }
})

//CREATE
app.post("/createImg", async(req, res) =>{
    try{
        var sql = `INSERT INTO imagens (referencia, titulo, data_criacao)
        values(?, ?, ?)`;  
        con.query(sql, [req.body.referencia, req.body.titulo, req.body.data_criacao], function (err, result) {  
            res.status(200).json("Criada com sucesso")  
        })
    }catch(error){
        res.status(500).json("Erro ao fazer operação crud")
    }
})