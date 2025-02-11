const express = require("express");
const {selectController, insertController, updateController, deleteController} = require("../CONTROLLER/userController.js")

const router =express.Router()

router.get("/select", selectController)
router.post("/insert", insertController)
router.put("/update", updateController)
router.delete("/delete", deleteController)

module.exports = router

