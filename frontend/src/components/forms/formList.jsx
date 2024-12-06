import React, { useState, useEffect } from 'react';
import ReactSwitch from 'react-switch';  // Importando o Switch
import { getAllProjetos, deleteProjeto, updateProjeto } from '../../services/formularioService';
import './formList.scss';
import ProjectList from './ProjectList';

function ListaProjetos() {
  const [projetos, setProjetos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editandoProjeto, setEditandoProjeto] = useState(null);
  const [projetoEditado, setProjetoEditado] = useState({});
  const [projetosComEscalaVisible, setProjetosComEscalaVisible] = useState({});
  const [duracaoProjeto, setDuracaoProjeto] = useState({});
  const [showProjectList, setShowProjectList] = useState(false);
  const [selectedProjeto, setSelectedProjeto] = useState(null);

  // Função para truncar o resumo
  const truncateText = (text, maxLength) => {
    if (text && text.length > maxLength) {
      return text.slice(0, maxLength) + '...';
    }
    return text;
  };

  // Carregar os projetos
  useEffect(() => {
    const fetchProjetos = async () => {
      try {
        const data = await getAllProjetos();
        setProjetos(data);
        setLoading(false);
      } catch (err) {
        setError('Erro ao carregar os projetos');
        setLoading(false);
      }
    };

    fetchProjetos();
  }, []);

  // Editar projeto
  const handleEdit = (projeto) => {
    setEditandoProjeto(projeto);
    setProjetoEditado(projeto);
  };

  const handleSaveEdit = async () => {
    try {
      await updateProjeto(editandoProjeto.id, projetoEditado);
      const projetosAtualizados = projetos.map(projeto =>
        projeto.id === projetoEditado.id ? projetoEditado : projeto
      );
      setProjetos(projetosAtualizados);
      setEditandoProjeto(null);
    } catch (err) {
      setError('Erro ao editar o projeto');
    }
  };

  // Deletar projeto
  const handleDelete = async (id) => {
    try {
      await deleteProjeto(id);
      const projetosAtualizados = projetos.filter(projeto => projeto.id !== id);
      setProjetos(projetosAtualizados);
    } catch (err) {
      setError('Erro ao excluir o projeto');
    }
  };

  // Controlar visibilidade da escala de duração
  const toggleEscalaDuracao = (projetoId) => {
    setProjetosComEscalaVisible(prevState => ({
      ...prevState,
      [projetoId]: !prevState[projetoId]
    }));
  };

  // Atualizar o valor da duração
  const handleDuracaoChange = (projetoId, valor) => {
    setDuracaoProjeto(prevState => ({
      ...prevState,
      [projetoId]: valor
    }));
  };

  // Mostrar ou ocultar o ProjectList no modal
  const handleVisualizar = (projeto) => {
    setSelectedProjeto(projeto);
    setShowProjectList(true);
  };

  // Fechar o modal de visualização
  const handleCloseModal = () => {
    setShowUserDetails(false);
    setSelectedUsuario(null);
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
            <ReactSwitch
              checked={projetoEditado.status === 'Ativo'}
              onChange={(checked) => setProjetoEditado({ ...projetoEditado, status: checked ? 'Ativo' : 'Inativo' })}
              offColor="#888"
              onColor="#4CAF50"
              offHandleColor="#ccc"
              onHandleColor="#fff"
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
            <strong>Resumo:</strong> <span>{truncateText(projeto.resumo || 'Sem resumo', 100)}</span>
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
            <button className="action-btn" onClick={() => toggleEscalaDuracao(projeto.id)}>Escala de Duração</button>
            <button className="action-btn" onClick={() => handleVisualizar(projeto)}>Visualizar</button>
          </div>

          {/* Exibição da Escala de Duração */}
          {projetosComEscalaVisible[projeto.id] && (
            <div className="escala-duracao">
              <h5>Escala de Duração</h5>
              <input
                type="range"
                min="0"
                max="100"
                step="1"
                value={duracaoProjeto[projeto.id] || 50}
                onChange={(e) => handleDuracaoChange(projeto.id, e.target.value)}
              />
              <div>{duracaoProjeto[projeto.id]}% Concluído</div>
            </div>
          )}
        </div>
      ))}

      {/* Exibindo o ProjectList quando showProjectList for verdadeiro */}
      {showProjectList && selectedProjeto && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Detalhes do Projeto</h2>
            <button onClick={handleCloseModal}>Fechar</button>
            <div className="modal-body">
              <ProjectList projeto={selectedProjeto} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ListaProjetos;
