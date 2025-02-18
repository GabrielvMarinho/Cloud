const { selectImageService, insertImageService, updateImageService, deleteImageService, uploadFilesService } = require("../SERVICES/imageService");







async function uploadFilesController(req, res){
    try{
        const {filePath, bucketName, keyName, titulo} = req.body;
        const imagem = await uploadFilesService(filePath, bucketName, keyName, titulo);
        res.status(200).json(imagem)
    }catch(error){
        res.status(500).json("Erro ao fazer upload de image")
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

async function insertImageController(req, res) {
    try {
        const { titulo } = req.body;
        if (titulo) {
            await insertImageService(titulo);
            res.status(200).json("Imagem inserida com sucesso");
        } else {
            res.status(400).json("Dados faltando");
        }
    } catch (error) {
        res.status(500).json("Erro ao inserir imagem");
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

module.exports = { selectImageController, insertImageController, updateImageController, deleteImageController, uploadFilesController };
