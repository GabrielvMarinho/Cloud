const { selectUserRepository, insertUserRepository, updateUserRepository, deleteUserRepository } = require("../REPOSITORY/userRepository");
const UserDTO = require("../DTOs/userDTO");

async function selectUserService() {
    const sql = "SELECT * FROM usuario";
    const users = await selectUserRepository(sql);
    return users.map(user => new UserDTO(user.id, user.nome));
}

async function insertUserService(nome, data_criacao) {
    const sql = `INSERT INTO usuario(nome, data_criacao) VALUES ("${nome}", "${data_criacao}")`;
    insertUserRepository(sql);
}

async function updateUserService(id, nome, data_criacao) {
    const sql = `UPDATE usuario SET nome = "${nome}", data_criacao = "${data_criacao}" WHERE id = ${id}`;
    updateUserRepository(sql);
}

async function deleteUserService(id) {
    const sql = `DELETE FROM usuario WHERE id = ${id}`;
    deleteUserRepository(sql);
}

module.exports = { selectUserService, insertUserService, updateUserService, deleteUserService };
