const express = require("express");
const { selectImageController, insertImageController, updateImageController, deleteImageController } = require("../CONTROLLER/imageController");

const router = express.Router();

router.get("/images", selectImageController);
router.post("/images", insertImageController);
// router.put("/images", updateImageController);
// router.delete("/images", deleteImageController);

module.exports = router;
