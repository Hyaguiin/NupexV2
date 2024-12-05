import React, { useState, useEffect } from 'react';
import { getAllProjetos } from '../../services/formularioService';
import './formList.scss';

function ListaProjetos() {
  const [projetos, setProjetos] = useState([]);
  const [loading, setLoading] = useState(true); // Controle de loading
  const [error, setError] = useState(null); // Controle de erro

  useEffect(() => {
    const fetchProjetos = async () => {
      try {
        console.log("Fazendo requisição para obter projetos...");
        
        const data = await getAllProjetos(); // Chama o serviço que busca os projetos
        console.log("Dados recebidos da API:", data);
        
        setProjetos(data);
        setLoading(false);  // Finaliza o loading
      } catch (err) {
        console.error("Erro ao carregar os projetos:", err);
        setError('Erro ao carregar os projetos');
        setLoading(false);  // Finaliza o loading mesmo com erro
      }
    };

    fetchProjetos();  // Executa a requisição na montagem do componente
  }, []);  // O array vazio aqui garante que isso só aconteça uma vez

  // Se estiver carregando, mostra a mensagem
  if (loading) {
    return <div className="loading">Carregando projetos...</div>;
  }

  // Se houver um erro, exibe a mensagem de erro
  if (error) {
    return <div className="error">{error}</div>;
  }

  // Se não houver projetos
  if (projetos.length === 0) {
    return <div className="no-projects">Nenhum projeto encontrado.</div>;
  }

  return (
    <div className="projetos-list">
      <div className="projetos-header">
        <h4 className="header-item">Projeto</h4>
        <h4 className="header-item">Resumo</h4>
        <h4 className="header-item">Curso Coordenador</h4>
        <h4 className="header-item">Status</h4>
        <h4 className="header-item">Ações</h4>
      </div>

      {/* Renderizando os projetos */}
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
            <button className="action-btn">Editar</button>
            <button className="action-btn">Excluir</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListaProjetos;
