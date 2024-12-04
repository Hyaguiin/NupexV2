const knex = require("../database/conexao");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../utils/senhaToken");

const UsuarioService = {
  insert: async ({ nome, sobrenome, coordenador_ou_professor, email, senha, aceita_termos_condicoes }) => {
    const emailExistente = await knex("usuario").where({ email }).first();

    if (emailExistente) {
      throw new Error("O email já está registrado.");
    }

    const saltRounds = 10;
    const senhaCriptografada = await bcrypt.hash(senha, saltRounds);

    const [usuario] = await knex("usuario").insert({
      nome,
      sobrenome,
      coordenador_ou_professor,
      email,
      senha: senhaCriptografada,
      aceita_termos_condicoes,
    }).returning("*");

    return usuario;
  },

  getAll: async () => {
    return knex("usuario").select("*");
  },

  getById: async (id) => {
    const usuario = await knex("usuario").where({ id }).first();
    if (!usuario) {
      throw new Error("Usuário não encontrado");
    }
    return usuario;
  },

  login: async ({ email, senha }) => {
    const usuario = await knex("usuario").where({ email }).first();

    if (!usuario) {
      throw new Error("Email ou senha incorretos");
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) {
      throw new Error("Email ou senha incorretos");
    }

    const token = jwt.sign({ id: usuario.id, email: usuario.email }, JWT_SECRET, {
      expiresIn: "8h",
    });

    return {
      token,
      usuario: {
        id: usuario.id,
        nome: usuario.nome,
        sobrenome: usuario.sobrenome,
        coordenador_ou_professor: usuario.coordenador_ou_professor,
        email: usuario.email,
      },
    };
  },

  update: async (id, { nome, sobrenome, coordenador_ou_professor, email, senha, aceita_termos_condicoes }) => {
    const usuario = await knex("usuario").where({ id }).first();
    if (!usuario) {
      throw new Error("Usuário não encontrado");
    }

    let senhaCriptografada = usuario.senha;
    if (senha) {
      const saltRounds = 10;
      senhaCriptografada = await bcrypt.hash(senha, saltRounds);
    }

    await knex("usuario").where({ id }).update({
      nome,
      sobrenome,
      coordenador_ou_professor,
      email,
      senha: senhaCriptografada,
      aceita_termos_condicoes,
    });

    return knex("usuario").where({ id }).first();
  },

  delete: async (id) => {
    const usuario = await knex("usuario").where({ id }).first();
    if (!usuario) {
      throw new Error("Usuário não encontrado");
    }

    await knex("usuario").where({ id }).del();
    return { message: "Usuário deletado com sucesso" };
  },
};

module.exports = UsuarioService;
