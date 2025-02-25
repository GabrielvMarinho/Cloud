const { selectImageService, downloadImage, updateImageService, deleteImageService, uploadFilesService } = require("../SERVICES/imageService");







async function uploadFilesController(req, res){
    try{
        const {filePath, bucketName, keyName, titulo, id_user} = req.body;
        console.log(req.body)
        const imagem = await uploadFilesService(filePath, bucketName, keyName, titulo, id_user);
        res.status(200).json(imagem)
    }catch(error){
        res.status(500).json("Erro ao fazer upload de imagem")
    }

}


async function downloadImagesController(req, res){
    try{

        const {keyName} = req.body
        console.log(req.body)
        downloadImage(keyName)
        res.status(200).json("download feito")
    }catch(error){
        res.status(500).json("deu erro no s3")
    }
}

async function selectImageController(req, res) {
    try {
        const images = await selectImageService();
        res.status(200).json(images);
    } catch (error) {
        res.status(500).json("Erro ao buscar imagens");
    }
}



async function updateImageController(req, res) {
    try {
        const { id, titulo } = req.body;
        if (id && titulo) {
            await updateImageService(id, titulo);
            res.status(200).json("Imagem atualizada com sucesso");
        } else {
            res.status(400).json("Dados faltando");
        }
    } catch (error) {
        res.status(500).json("Erro ao atualizar imagem");
    }
}

async function deleteImageController(req, res) {
    try {
        const { id } = req.body;
        if (id) {
            await deleteImageService(id);
            res.status(200).json("Imagem removida com sucesso");
        } else {
            res.status(400).json("ID faltando");
        }
    } catch (error) {
        res.status(500).json("Erro ao deletar imagem");
    }
}

module.exports = {downloadImagesController,  selectImageController, updateImageController, deleteImageController, uploadFilesController };
