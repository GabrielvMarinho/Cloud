const express = require('express')
const axios = require('axios')

const app = express()

const PORT = 3000


app.listen(PORT)

// 1
app.get("/hello", async(req, res) =>{
    res.status(200).json({"message":"Olá Mundo!"})  
})
//2
app.get("/greet/:name", async(req, res) =>{
    try{
        const name = req.params.name
        res.status(200).json({"message":`Olá ${name}`})
    }catch(error){
        res.status(500).json({error:"Mensagem de erro"})
    }
})
//3
app.get("/sum/:a/:b", async(req, res) =>{
    try{
        const sum = parseInt(req.params.a)+parseInt(req.params.b)
        res.status(200).json({"result":sum})
    }catch(error){
        res.status(500).json({error:"Mensagem de erro"})
    }
})
//4
app.get("/subtract/:a/:b", async(req, res) =>{
    try{
        const sum = parseInt(req.params.a)-parseInt(req.params.b)
        res.status(200).json({"result":sum})
    }catch(error){
        res.status(500).json({error:"Mensagem de erro"})
    }
})
//5
app.get("/multiply/:a/:b", async(req, res) =>{
    try{
        const sum = parseInt(req.params.a)*parseInt(req.params.b)
        res.status(200).json({"result":sum})
    }catch(error){
        res.status(500).json({error:"Mensagem de erro"})
    }
})
//6
app.get("/divide/:a/:b", async(req, res) =>{
    try{
        const sum = parseInt(req.params.a)/parseInt(req.params.b)
        res.status(200).json({"result":sum})
    }catch(error){
        res.status(500).json({error:"Mensagem de erro"})
    }
})
//7
app.get("/check-parity/:number", async(req, res) =>{
    try{
        const number = parseInt(req.params.number)
        if(number%2==0){
            res.status(200).json({"parity":"par"})
        }else{
            res.status(200).json({"parity":"ímpar"})

        }

    }catch(error){
        res.status(500).json({error:"Mensagem de erro"})
    }
})
//8
app.get("/full-name/:first_name/:last_name", async(req, res) =>{
    try{
        const first_name = req.params.first_name
        const last_name = req.params.last_name
        
        res.status(200).json({"full_name":`${first_name} ${last_name}`})
    }catch(error){
        res.status(500).json({error:"Mensagem de erro"})
    }
})

//9
app.get("/convert-temperature/:celsius", async(req, res) =>{
    try{
        const celsius = req.params.celsius
        
        res.status(200).json({"fahrenheit": (celsius * 9/5) + 32})
    }catch(error){
        res.status(500).json({error:"Mensagem de erro"})
    }
})
//10
app.get("/calculate-age/:birth_year", async(req, res) =>{
    try{
        const ano = req.params.birth_year
        
        res.status(200).json({"age": 2024-ano})
    }catch(error){
        res.status(500).json({error:"Mensagem de erro"})
    }
})