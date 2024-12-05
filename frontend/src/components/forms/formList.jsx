import React, { useState, useEffect } from 'react';
import { getAllProjetos, deleteProjeto, updateProjeto } from '../../services/formularioService';
import './formList.scss';

function ListaProjetos() {
  const [projetos, setProjetos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editandoProjeto, setEditandoProjeto] = useState(null);  // Estado para armazenar o projeto sendo editado
  const [projetoEditado, setProjetoEditado] = useState({});  // Estado para armazenar os dados editados

  useEffect(() => {
    const fetchProjetos = async () => {
      try {
        console.log("Fazendo requisição para obter projetos...");
        const data = await getAllProjetos();
        console.log("Dados recebidos da API:", data);
        setProjetos(data);
        setLoading(false);
      } catch (err) {
        console.error("Erro ao carregar os projetos:", err);
        setError('Erro ao carregar os projetos');
        setLoading(false);
      }
    };

    fetchProjetos();
  }, []);

  // Função para lidar com a edição do projeto
  const handleEdit = (projeto) => {
    setEditandoProjeto(projeto); // Define o projeto que está sendo editado
    setProjetoEditado(projeto);  // Preenche os campos do formulário com os dados do projeto
  };

  // Função para salvar as alterações no projeto
  const handleSaveEdit = async () => {
    try {
      await updateProjeto(editandoProjeto.id, projetoEditado);
      const projetosAtualizados = projetos.map(projeto =>
        projeto.id === projetoEditado.id ? projetoEditado : projeto
      );
      setProjetos(projetosAtualizados);
      setEditandoProjeto(null);  // Fecha o formulário de edição
    } catch (err) {
      console.error('Erro ao editar o projeto:', err);
      setError('Erro ao editar o projeto');
    }
  };

  // Função para excluir o projeto
  const handleDelete = async (id) => {
    try {
      await deleteProjeto(id);
      const projetosAtualizados = projetos.filter(projeto => projeto.id !== id);
      setProjetos(projetosAtualizados);
    } catch (err) {
      console.error('Erro ao excluir o projeto:', err);
      setError('Erro ao excluir o projeto');
    }
  };

  if (loading) {
    return <div className="loading">Carregando projetos...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (projetos.length === 0) {
    return <div className="no-projects">Nenhum projeto encontrado.</div>;
  }

  return (
    <div className="projetos-list">
      {/* Formulário de Edição */}
      {editandoProjeto && (
        <div className="edit-form">
          <h3>Editar Projeto</h3>
          <div>
            <label>Projeto:</label>
            <input
              type="text"
              value={projetoEditado.projeto || ''}
              onChange={(e) => setProjetoEditado({ ...projetoEditado, projeto: e.target.value })}
            />
          </div>
          <div>
            <label>Resumo:</label>
            <input
              type="text"
              value={projetoEditado.resumo || ''}
              onChange={(e) => setProjetoEditado({ ...projetoEditado, resumo: e.target.value })}
            />
          </div>
          <div>
            <label>Curso Coordenador:</label>
            <input
              type="text"
              value={projetoEditado.curso_coordenador || ''}
              onChange={(e) => setProjetoEditado({ ...projetoEditado, curso_coordenador: e.target.value })}
            />
          </div>
          <div>
            <label>Status:</label>
            <input
              type="text"
              value={projetoEditado.status || ''}
              onChange={(e) => setProjetoEditado({ ...projetoEditado, status: e.target.value })}
            />
          </div>
          <button onClick={handleSaveEdit}>Salvar</button>
          <button onClick={() => setEditandoProjeto(null)}>Cancelar</button>
        </div>
      )}

      <div className="projetos-header">
        <h4 className="header-item">Projeto</h4>
        <h4 className="header-item">Resumo</h4>
        <h4 className="header-item">Curso Coordenador</h4>
        <h4 className="header-item">Status</h4>
        <h4 className="header-item">Ações</h4>
      </div>

      {projetos.map((projeto) => (
        <div key={projeto.id} className="projeto-item">
          <div className="projeto-detail">
            <strong>Projeto:</strong> <span>{projeto.projeto || 'Sem nome'}</span>
          </div>
          <div className="projeto-detail">
            <strong>Resumo:</strong> <span>{projeto.resumo || 'Sem resumo'}</span>
          </div>
          <div className="projeto-detail">
            <strong>Curso Coordenador:</strong> <span>{projeto.curso_coordenador || 'Sem curso coordenador'}</span>
          </div>
          <div className="projeto-detail">
            <strong>Status:</strong> <span>{projeto.status || 'Sem status'}</span>
          </div>
          <div className="projeto-actions">
            <button className="action-btn" onClick={() => handleEdit(projeto)}>Editar</button>
            <button className="action-btn" onClick={() => handleDelete(projeto.id)}>Excluir</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListaProjetos;