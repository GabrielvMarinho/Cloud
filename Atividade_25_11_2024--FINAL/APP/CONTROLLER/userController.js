const { selectUserService, insertUserService, updateUserService, deleteUserService } = require("../SERVICES/userService");

async function selectUserController(req, res) {
    try {
        const users = await selectUserService();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json("Erro ao buscar usuários");
    }
}

async function insertUserController(req, res) {
    try {
        const { nome, data_criacao } = req.body;
        if (nome && data_criacao) {
            await insertUserService(nome, data_criacao);
            res.status(200).json("Usuário inserido com sucesso");
        } else {
            res.status(400).json("Dados faltando");
        }
    } catch (error) {
        res.status(500).json("Erro ao inserir usuário");
    }
}

async function updateUserController(req, res) {
    try {
        const { id, nome, data_criacao } = req.body;
        if (id && nome && data_criacao) {
            await updateUserService(id, nome, data_criacao);
            res.status(200).json("Usuário atualizado com sucesso");
        } else {
            res.status(400).json("Dados faltando");
        }
    } catch (error) {
        res.status(500).json("Erro ao atualizar usuário");
    }
}

async function deleteUserController(req, res) {
    try {
        const { id } = req.body;
        if (id) {
            await deleteUserService(id);
            res.status(200).json("Usuário removido com sucesso");
        } else {
            res.status(400).json("ID faltando");
        }
    } catch (error) {
        res.status(500).json("Erro ao deletar usuário");
    }
}

module.exports = { selectUserController, insertUserController, updateUserController, deleteUserController };
