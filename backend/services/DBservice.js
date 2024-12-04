
const knex = require("../database/conexao");

const DBService = {
  
  create: async (req, res) => {
    console.log("Iniciando a criação da tabela projeto_nupex");

    try {
      
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

      
      res.status(200).json({
        projeto_nupex: projetoResponse,
      });

    } catch (err) {
      console.error("Erro ao criar a tabela projeto_nupex", err);
      res.status(500).json({ message: "Erro ao criar a tabela", error: err.message });
    }
  },
};

module.exports = DBService;
