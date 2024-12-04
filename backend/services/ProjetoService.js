const knex = require('../database/conexao');  // Importando a conexão do banco de dados

const ProjetoService = {
  // Função de inserção do projeto
  insert: async ({ projeto, periodicidade, modalidade, titulo, professores, resumo, palavra_chave, justificativa, objetivos, fundamentacao_teorica, metodologia, referencias }) => {
    const trx = await knex.transaction();  // Inicia uma transação no banco

    try {
      // Verifica se todos os campos obrigatórios foram preenchidos
      const camposObrigatorios = [
        'professor_coordenador',
        'email_coordenador',
        'professor_colaborador',
        'email_colaborador',
        'curso_coordenador',
        'curso_colaborador',
        'telefone_coordenador',
        'telefone_colaborador',
        'resumo',
        'palavra_chave',
        'justificativa',
        'objetivos',
        'fundamentacao_teorica',
        'metodologia',
        'referencias'
      ];

      // Percorre os campos obrigatórios e verifica se algum está vazio
      for (let campo of camposObrigatorios) {
        if (!professores[campo] && ![ 'resumo', 'palavra_chave', 'justificativa', 'objetivos', 'fundamentacao_teorica', 'metodologia', 'referencias'].includes(campo)) {
          throw new Error(`O campo ${campo} é obrigatório`); // Se algum campo faltar, lança um erro
        }
      }

      // Inserindo o projeto no banco de dados com os novos campos
      const [projetoInserido] = await trx('projeto_nupex')
        .insert({
          projeto,
          periodicidade,
          modalidade,
          titulo,
          professor_coordenador: professores.professor_coordenador,
          email_coordenador: professores.email_coordenador,
          professor_colaborador: professores.professor_colaborador,
          email_colaborador: professores.email_colaborador,
          curso_coordenador: professores.curso_coordenador,
          curso_colaborador: professores.curso_colaborador,
          telefone_coordenador: professores.telefone_coordenador,
          telefone_colaborador: professores.telefone_colaborador,
          resumo,
          palavra_chave,
          justificativa,
          objetivos,
          fundamentacao_teorica,
          metodologia,
          referencias
        })
        .returning('*'); // Retorna todos os dados do projeto inserido (caso tenha sucesso)

      // Commit da transação
      await trx.commit();

      return projetoInserido;  // Retorna o projeto que foi inserido no banco
    } catch (err) {
      // Caso ocorra algum erro, faz o rollback da transação
      await trx.rollback();
      throw new Error(`Erro ao inserir projeto: ${err.message}`);  // Lança o erro com a mensagem
    }
  },

  // Função para buscar todos os projetos
  getAll: async () => {
    try {
      return await knex('projeto_nupex').select('*');  // Retorna todos os projetos do banco de dados
    } catch (err) {
      throw new Error('Erro ao buscar projetos');
    }
  },

  // Função para buscar um projeto pelo ID
  getById: async (id) => {
    try {
      const projeto = await knex('projeto_nupex').where({ id }).first();  // Busca o projeto pelo ID
      if (!projeto) {
        throw new Error('Projeto não encontrado');
      }

      return projeto;  // Retorna o projeto encontrado
    } catch (err) {
      throw new Error(`Erro ao buscar projeto: ${err.message}`);
    }
  },

  // Função para atualizar um projeto existente
  update: async (id, { projeto, periodicidade, modalidade, titulo, professores, resumo, palavra_chave, justificativa, objetivos, fundamentacao_teorica, metodologia, referencias }) => {
    const trx = await knex.transaction();  // Inicia uma transação no banco

    try {
      const projetoExistente = await trx('projeto_nupex').where({ id }).first();  // Verifica se o projeto existe
      if (!projetoExistente) {
        throw new Error('Projeto não encontrado');  // Se o projeto não existir, lança um erro
      }

      // Atualiza o projeto com os dados novos
      await trx('projeto_nupex')
        .where({ id })
        .update({
          projeto,
          periodicidade,
          modalidade,
          titulo,
          professor_coordenador: professores.professor_coordenador,
          email_coordenador: professores.email_coordenador,
          professor_colaborador: professores.professor_colaborador,
          email_colaborador: professores.email_colaborador,
          curso_coordenador: professores.curso_coordenador,
          curso_colaborador: professores.curso_colaborador,
          telefone_coordenador: professores.telefone_coordenador,
          telefone_colaborador: professores.telefone_colaborador,
          resumo,
          palavra_chave,
          justificativa,
          objetivos,
          fundamentacao_teorica,
          metodologia,
          referencias
        });

      // Commit da transação
      await trx.commit();

      return await knex('projeto_nupex').where({ id }).first();  // Retorna o projeto atualizado
    } catch (err) {
      // Caso ocorra algum erro, faz o rollback da transação
      await trx.rollback();
      throw new Error(`Erro ao atualizar projeto: ${err.message}`);
    }
  },

  // Função para deletar um projeto
  delete: async (id) => {
    const trx = await knex.transaction();  // Inicia uma transação no banco

    try {
      const projetoExistente = await trx('projeto_nupex').where({ id }).first();  // Verifica se o projeto existe
      if (!projetoExistente) {
        throw new Error('Projeto não encontrado');  // Se o projeto não existir, lança um erro
      }

      // Deleta o projeto
      await trx('projeto_nupex').where({ id }).del();

      // Commit da transação
      await trx.commit();

      return { message: 'Projeto deletado com sucesso' };  // Retorna uma mensagem de sucesso
    } catch (err) {
      // Caso ocorra algum erro, faz o rollback da transação
      await trx.rollback();
      throw new Error(`Erro ao deletar projeto: ${err.message}`);
    }
  },
};

module.exports = ProjetoService;  // Exporta o serviço
