const knex = require("../database/conexao");

const DBService = {

  create: async (req, res) => {
    console.log("Iniciando a criação das tabelas...");

    try {

      // Função para criar tabela se não existir
      const createTableIfNotExists = async (tableName, tableCallback) => {
        const exists = await knex.schema.hasTable(tableName);
        if (!exists) {
          await knex.schema.createTable(tableName, tableCallback);
          console.log(`Tabela \`${tableName}\` criada com sucesso`);
          return {
            status: 200,
            message: `Tabela \`${tableName}\` criada com sucesso`,
          };
        } else {
          console.log(`Tabela \`${tableName}\` já existe`);
          return { status: 201, message: `Tabela \`${tableName}\` já existe` };
        }
      };

      // Criando a tabela projeto_nupex
      const projetoResponse = await createTableIfNotExists(
        "projeto_nupex", 
        (table) => {
          table.increments("id").primary();  

          table.string("projeto", 255).notNullable();  
          table.string("periodicidade", 100).notNullable();  
          table.string("modalidade", 100).notNullable(); 
          table.string("titulo", 255).notNullable();  

          table.string("professor_coordenador", 100).notNullable(); 
          table.string("email_coordenador", 255).notNullable();  
          table.string("professor_colaborador", 255).notNullable();  
          table.string("email_colaborador", 255).notNullable();  
          table.string("curso_coordenador", 100).notNullable();  
          table.string("curso_colaborador", 100).notNullable();  
          table.string("telefone_coordenador", 20).notNullable();  
          table.string("telefone_colaborador", 20).notNullable();  

          table.text("resumo").notNullable();  
          table.string("palavra_chave", 255).notNullable();  
          table.text("justificativa").notNullable();  
          table.text("objetivos").notNullable();  
          table.text("fundamentacao_teorica").notNullable();  
          table.text("metodologia").notNullable();  
          table.text("referencias").notNullable();  

          table.timestamps(true, true);
        }
      );

      // Criando a tabela usuario
      const usuarioResponse = await createTableIfNotExists(
        "usuario",
        (table) => {
          table.increments("id").primary();  // ID único para cada usuário

          table.string("nome", 255).notNullable();  // Nome do usuário
          table.string("sobrenome", 255).notNullable();  // Sobrenome do usuário
          table.string("coordenador_ou_professor", 50).notNullable();  // Tipo de usuário, coordenador ou professor
          table.string("email", 255).unique().notNullable();  // Email único
          table.string("senha", 255).notNullable();  // Senha do usuário
          table.boolean("aceita_termos_condicoes").defaultTo(false);  // Indica se o usuário aceitou os termos
          table.timestamp("created_at").defaultTo(knex.fn.now());  // Data de criação do usuário
          table.timestamp("updated_at").defaultTo(knex.fn.now());  // Data da última atualização
        }
      );

      // Respondendo com o status da criação das tabelas
      res.status(200).json({
        projeto_nupex: projetoResponse,
        usuario: usuarioResponse,
      });

    } catch (err) {
      console.error("Erro ao criar as tabelas", err);
      res.status(500).json({ message: "Erro ao criar as tabelas", error: err.message });
    }
  },

};

module.exports = DBService;
