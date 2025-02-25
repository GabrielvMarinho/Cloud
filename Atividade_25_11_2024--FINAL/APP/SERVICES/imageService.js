const path = require("path");

const { selectImageRepository, updateImageRepository, deleteImageRepository, uploadFilesRepository } = require("../REPOSITORY/imageRepository");
const ImageDTO = require("../DTOs/imageDTO");
const fs = require('fs');


const AWS = require('aws-sdk');
const { promises } = require("dns");

// Configuração das credenciais AWS
AWS.config.update({
  region: 'us-east-1',  // Substitua pela sua região
  accessKeyId: '',
  secretAccessKey: ''
});

// Criação da instância do S3
const s3 = new AWS.S3();



async function uploadFilesService(filePath, bucketName, keyName, titulo, id_user){
    console.log(filePath)
    const absolutePath = path.resolve(filePath)

    var fileContent=null;
    try{
      
      fileContent = fs.readFileSync(absolutePath);

    }catch(error){
      console.log(error)
    }

    const params = {
        Bucket: bucketName,  // Nome do seu bucket S3
        Key: keyName,        // Nome do arquivo no S3
        Body: fileContent    // Conteúdo do arquivo
      };

      s3.upload(params, (err, data) => {
        if (err) {
          console.error('Erro ao fazer o upload:', err);
        } else {
          console.log('Arquivo carregado com sucesso:', data.Location);
        }
      });
      
      //fazendo upload pra s3
      

      //fazendo uma instancia no db pra imagem que teve o upload feito
      const sql = `INSERT INTO imagem(keyname, titulo, id_user) VALUES ("${keyName}", "${titulo}", "${id_user}")`;
      const images = await uploadFilesRepository(sql)
      return images


}

async function downloadImage(keyName){
    const params = {
      Bucket: "bucketmi75", // Nome do bucket
      Key: keyName // Caminho da imagem no S3
    };
    var object = null
    try{
      const filePath = path.join(__dirname, "../../Downloads", keyName);
      console.log(filePath)

      object = await s3.getObject(params).promise();
      fs.writeFileSync(filePath, object.Body);
    }catch(eror){
      console.log(eror)
    }
    console.log("-333322222222222222222222222222222222222222222222222222222")
    console.log(object)
}

async function selectImageService() {

    const sql = "SELECT * FROM imagem";
    const images = await selectImageRepository(sql);
    return images.map(img => new ImageDTO(img.id, img.titulo));
}


async function updateImageService(id, titulo) {
    const sql = `UPDATE imagem SET titulo = "${titulo}" WHERE id = ${id}`;
    updateImageRepository(sql);
}

async function deleteImageService(id) {
    const sql = `DELETE FROM imagem WHERE id = ${id}`;
    deleteImageRepository(sql);
}

module.exports = { downloadImage, selectImageService, updateImageService, deleteImageService, uploadFilesService };
