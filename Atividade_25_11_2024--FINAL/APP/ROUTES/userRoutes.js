const express = require("express");
const selectController = require("../CONTROLLER/userController.js")

const router =express.Router()

router.get("/select", selectController)

module.exports = router

