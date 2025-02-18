const imageModel = require("../MODEL/imageModel");
const con = require("../SERVICES/dbCon.js");

async function selectImageRepository(sql) {
    return new Promise(resolve => {
        con.query(sql, function (err, result) {
            const array = result.map(row => new imageModel(row.id, row.titulo, row.url));
            resolve(array);
        });
    });
}
async function uploadFilesRepository(sql){
    con.query(sql, () => {});
}
async function insertImageRepository(sql) {
    con.query(sql, () => {});
}

async function updateImageRepository(sql) {
    con.query(sql, () => {});
}

async function deleteImageRepository(sql) {
    con.query(sql, () => {});
}

module.exports = { selectImageRepository, insertImageRepository, updateImageRepository, deleteImageRepository, uploadFilesRepository };
