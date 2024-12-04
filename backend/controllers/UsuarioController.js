const UsuarioService = require("../services/UsuarioService");

const UsuarioController = {
  insert: async (req, res) => {
    const { nome, sobrenome, coordenador_ou_professor, email, senha, aceita_termos_condicoes } = req.body;

    try {
      const usuario = await UsuarioService.insert({ nome, sobrenome, coordenador_ou_professor, email, senha, aceita_termos_condicoes });
      res.status(201).json(usuario);
    } catch (err) {
      console.error("Erro ao inserir usuário", err);
      res.status(500).json({ error: err.message || "Erro ao inserir usuário" });
    }
  },

  getAll: async (req, res) => {
    try {
      const usuarios = await UsuarioService.getAll();
      res.status(200).json(usuarios);
    } catch (err) {
      console.error("Erro ao buscar usuários", err);
      res.status(500).json({ error: "Erro ao buscar usuários" });
    }
  },

  getById: async (req, res) => {
    const { id } = req.params;

    try {
      const usuario = await UsuarioService.getById(id);
      res.status(200).json(usuario);
    } catch (err) {
      console.error("Erro ao buscar usuário por ID", err);
      res.status(500).json({ error: err.message || "Erro ao buscar usuário" });
    }
  },

  login: async (req, res) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
      return res.status(400).json({ error: "Email e senha são obrigatórios" });
    }

    try {
      const { token, usuario } = await UsuarioService.login({ email, senha });
      res.status(200).json({ message: "Login bem-sucedido", token, usuario });
    } catch (err) {
      console.error("Erro ao fazer login", err);
      res.status(500).json({ error: err.message || "Erro ao fazer login" });
    }
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { nome, sobrenome, coordenador_ou_professor, email, senha, aceita_termos_condicoes } = req.body;

    try {
      const usuario = await UsuarioService.update(id, { nome, sobrenome, coordenador_ou_professor, email, senha, aceita_termos_condicoes });
      res.status(200).json(usuario);
    } catch (err) {
      console.error("Erro ao atualizar usuário", err);
      res.status(500).json({ error: err.message || "Erro ao atualizar usuário" });
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;

    try {
      const response = await UsuarioService.delete(id);
      res.status(200).json(response);
    } catch (err) {
      console.error("Erro ao deletar usuário", err);
      res.status(500).json({ error: err.message || "Erro ao deletar usuário" });
    }
  },
};

module.exports = UsuarioController;
