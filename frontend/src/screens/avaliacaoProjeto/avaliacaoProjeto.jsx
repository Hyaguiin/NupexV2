import React, { useEffect, useState } from 'react';
import { getAllProjetos } from '../../services/formularioService'; // Importando o serviço
import './avaliacaoProjeto.scss'; 

function AvaliacaoProjetos() {
  const [projetos, setProjetos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProjeto, setSelectedProjeto] = useState(null);
  const [avaliacao, setAvaliacao] = useState('');
  const [comentario, setComentario] = useState('');

  // Função para buscar os projetos
  const fetchProjetos = async () => {
    try {
      const data = await getAllProjetos();
      setProjetos(data);
      setLoading(false);
    } catch (error) {
      console.error("Erro ao buscar projetos", error);
      setLoading(false);
    }
  };

  // Função para enviar a avaliação
  const handleAvaliar = async () => {
    if (!selectedProjeto || !avaliacao || !comentario) {
      alert("Por favor, selecione um projeto, insira uma avaliação e um comentário.");
      return;
    }

    // Aqui você pode enviar a avaliação usando um serviço de atualização, por exemplo
    console.log("Avaliação enviada", { projetoId: selectedProjeto.id, avaliacao, comentario });

    // Limpar os campos após a avaliação
    setSelectedProjeto(null);
    setAvaliacao('');
    setComentario('');
  };

  // Carregar os projetos ao montar o componente
  useEffect(() => {
    fetchProjetos();
  }, []);

  return (
    <div className="avaliacao-projetos">
      <h1>Avaliação de Projetos</h1>

      {loading ? (
        <p>Carregando projetos...</p>
      ) : (
        <div className="projetos-list">
          <h2>Selecione um projeto para avaliar</h2>
          <ul>
            {projetos.map((projeto) => (
              <li
                key={projeto.id}
                className={selectedProjeto?.id === projeto.id ? 'selected' : ''}
                onClick={() => setSelectedProjeto(projeto)}
              >
                {projeto.nome}
              </li>
            ))}
          </ul>

          {selectedProjeto && (
            <div className="avaliacao-form">
              <h3>Avalie o projeto: {selectedProjeto.nome}</h3>
              <div className="input-group">
                <label>Avaliação:</label>
                <select value={avaliacao} onChange={(e) => setAvaliacao(e.target.value)}>
                  <option value="">Escolha uma avaliação</option>
                  <option value="1">1 - Ruim</option>
                  <option value="2">2 - Regular</option>
                  <option value="3">3 - Bom</option>
                  <option value="4">4 - Muito Bom</option>
                  <option value="5">5 - Excelente</option>
                </select>
              </div>

              <div className="input-group">
                <label>Comentário:</label>
                <textarea
                  value={comentario}
                  onChange={(e) => setComentario(e.target.value)}
                  placeholder="Deixe um comentário sobre o projeto"
                />
              </div>

              <button onClick={handleAvaliar}>Enviar Avaliação</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default AvaliacaoProjetos;
