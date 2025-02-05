const express = require("express");

//starting the app
const app = express()
//instructing the app to listen to this port
app.listen(3000)
app.use(express.json())



const router = require("../APP/ROUTES/userRoutes")

app.use("/", router)

