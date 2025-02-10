const express = require("express");
const {selectController, insertController} = require("../CONTROLLER/userController.js")

const router =express.Router()

router.get("/select", selectController)
router.post("/insert", insertController)

module.exports = router

