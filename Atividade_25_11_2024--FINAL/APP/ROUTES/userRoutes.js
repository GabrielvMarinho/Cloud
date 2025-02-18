const express = require("express");
const { selectUserController, insertUserController, updateUserController, deleteUserController } = require("../CONTROLLER/userController");

const router = express.Router();

router.get("/users", selectUserController);
router.post("/users", insertUserController);
router.put("/users", updateUserController);
router.delete("/users", deleteUserController);

module.exports = router;
