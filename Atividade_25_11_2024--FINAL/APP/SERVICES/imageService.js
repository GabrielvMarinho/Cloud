const { selectImageRepository, insertImageRepository, updateImageRepository, deleteImageRepository, uploadFilesRepository } = require("../REPOSITORY/imageRepository");
const ImageDTO = require("../DTOs/imageDTO");
const fs = require('fs');

async function uploadFilesService(filePath, bucketName, keyName, titulo){

    const fileContent = fs.readFileSync(filePath);

    const params = {
        Bucket: bucketName,  // Nome do seu bucket S3
        Key: keyName,        // Nome do arquivo no S3
        Body: fileContent    // Conteúdo do arquivo
      };
    
      //fazendo upload pra s3
      s3.upload(params, (err, data) => {
        if (err) {
          console.error('Erro ao fazer o upload:', err);
        } else {
          console.log('Arquivo carregado com sucesso:', data.Location);
        }
      });

      //fazendo uma instancia no db pra imagem que teve o upload feito
      const sql = `INSERT INTO imagem(keyname, titulo) VALUES ("${keyName}", "${titulo}")`;
      const images = await uploadFilesRepository(sql)
      return images


}


async function selectImageService() {
    const sql = "SELECT * FROM imagem";
    const images = await selectImageRepository(sql);
    return images.map(img => new ImageDTO(img.id, img.titulo));
}

async function insertImageService(titulo) {
    const sql = `INSERT INTO imagem(titulo) VALUES ("${titulo}")`;
    insertImageRepository(sql);
}

async function updateImageService(id, titulo) {
    const sql = `UPDATE imagem SET titulo = "${titulo}" WHERE id = ${id}`;
    updateImageRepository(sql);
}

async function deleteImageService(id) {
    const sql = `DELETE FROM imagem WHERE id = ${id}`;
    deleteImageRepository(sql);
}

module.exports = { selectImageService, insertImageService, updateImageService, deleteImageService, uploadFilesService };
