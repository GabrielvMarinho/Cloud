const userModel = require("../MODEL/userModel");
const con = require("../SERVICES/dbCon.js");

async function selectUserRepository(sql) {
    return new Promise(resolve => {
        con.query(sql, function (err, result) {
            const array = result.map(row => new userModel(row.id, row.nome, row.data_criacao));
            resolve(array);
        });
    });
}

async function insertUserRepository(sql) {
    con.query(sql, () => {});
}

async function updateUserRepository(sql) {
    con.query(sql, () => {});
}

async function deleteUserRepository(sql) {
    con.query(sql, () => {});
}

module.exports = { selectUserRepository, insertUserRepository, updateUserRepository, deleteUserRepository };
