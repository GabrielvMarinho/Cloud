const express = require("express");
const { selectImageController, downloadImagesController, updateImageController, deleteImageController, uploadFilesController } = require("../CONTROLLER/imageController");

const router = express.Router();

router.get("/images", selectImageController);
router.get("/image", downloadImagesController)
// router.put("/images", updateImageController);
// router.delete("/images", deleteImageController);
router.post("/images", uploadFilesController)

module.exports = router;
