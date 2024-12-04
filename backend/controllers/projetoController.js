const ProjetoService = require('../services/ProjetoService'); // Importando o serviço

const ProjetoController = {
  insert: async (req, res) => {
    const { 
      projeto, 
      periodicidade, 
      modalidade, 
      titulo, 
      professores, 
      resumo, 
      palavra_chave, 
      justificativa, 
      objetivos, 
      fundamentacao_teorica, 
      metodologia, 
      referencias 
    } = req.body;  

    try {
      const projetoInserido = await ProjetoService.insert({
        projeto,
        periodicidade,
        modalidade,
        titulo,
        professores,
        resumo,
        palavra_chave,
        justificativa,
        objetivos,
        fundamentacao_teorica,
        metodologia,
        referencias
      });

      res.status(201).json({
        message: 'Projeto inserido com sucesso',
        projeto: projetoInserido,
      });
    } catch (err) {
      console.error('Erro ao inserir projeto', err);
      res.status(500).json({ error: err.message });
    }
  },

  getAll: async (req, res) => {
    try {
      const projetos = await ProjetoService.getAll();
      res.status(200).json(projetos); // Retorna todos os projetos
    } catch (err) {
      console.error('Erro ao buscar projetos', err);
      res.status(500).json({ error: err.message });
    }
  },

  getById: async (req, res) => {
    const { id } = req.params;

    const idInt = parseInt(id, 10);

    if (isNaN(idInt)) {
      return res.status(400).json({ error: 'ID inválido' });
    }

    try {
      const projeto = await ProjetoService.getById(idInt);
      res.status(200).json(projeto);  // Retorna o projeto com todos os campos, incluindo os novos
    } catch (err) {
      console.error('Erro ao buscar projeto', err);
      res.status(500).json({ error: err.message });
    }
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { 
      projeto, 
      periodicidade, 
      modalidade, 
      titulo, 
      professores, 
      resumo, 
      palavra_chave, 
      justificativa, 
      objetivos, 
      fundamentacao_teorica, 
      metodologia, 
      referencias 
    } = req.body;

    try {
      const projetoAtualizado = await ProjetoService.update(id, {
        projeto,
        periodicidade,
        modalidade,
        titulo,
        professores,
        resumo,
        palavra_chave,
        justificativa,
        objetivos,
        fundamentacao_teorica,
        metodologia,
        referencias
      });
      
      res.status(200).json({
        message: 'Projeto atualizado com sucesso',
        projeto: projetoAtualizado,
      });
    } catch (err) {
      console.error('Erro ao atualizar projeto', err);
      res.status(500).json({ error: err.message });
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;

    try {
      const response = await ProjetoService.delete(id);
      res.status(200).json(response);
    } catch (err) {
      console.error('Erro ao deletar projeto', err);
      res.status(500).json({ error: err.message });
    }
  },
};

module.exports = ProjetoController;
