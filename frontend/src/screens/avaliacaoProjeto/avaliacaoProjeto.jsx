import React, { useState } from 'react';
import './avaliacaoProjeto.scss'; 

function AvaliacaoProjetos() {
  const [projeto, setProjeto] = useState('');
  const [modalidade, setModalidade] = useState(''); // Estado para a modalidade
  const [proponente, setProponente] = useState(''); // Estado para o proponente
  const [curso, setCurso] = useState(''); // Estado para o curso
  const [comentariosRelator, setComentariosRelator] = useState(''); // Novo estado para Comentários do Relator

  // Função para enviar o formulário
  const handleSubmit = () => {
    if (!projeto || !modalidade || !proponente || !curso || !comentariosRelator) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Aqui você pode processar os dados
    console.log("Dados enviados", { projeto, modalidade, proponente, curso, comentariosRelator });
    
    // Limpar os campos após o envio
    setProjeto('');
    setModalidade('');
    setProponente('');
    setCurso('');
    setComentariosRelator('');
  };

  return (
    <div className="avaliacao-projetos">
      <div className="container-formulario">
        <h1 className='tituloArea'>Formulário de Admissão de proposta do Projeto</h1>

        {/* Formulário com os campos verticais */}
        <div className="input-group-vertical">
          <div className="input-item">
            <label>Projeto:</label>
            <input 
              type="text" 
              value={projeto} 
              onChange={(e) => setProjeto(e.target.value)} 
              placeholder="Nome do Projeto" 
            />
          </div>

          <div className="input-item">
            <label>Modalidade:</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="modalidade"
                  value="Pesquisa"
                  checked={modalidade === 'Pesquisa'}
                  onChange={(e) => setModalidade(e.target.value)}
                />
                Pesquisa
              </label>
              <label>
                <input
                  type="radio"
                  name="modalidade"
                  value="Extensao"
                  checked={modalidade === 'Extensao'}
                  onChange={(e) => setModalidade(e.target.value)}
                />
                Extensão
              </label>
            </div>
          </div>

          <div className="input-group-horizontal">
            <div className="input-item">
              <label>Proponente:</label>
              <input 
                type="text" 
                value={proponente} 
                onChange={(e) => setProponente(e.target.value)} 
                placeholder="Nome do Proponente" 
              />
            </div>

            <div className="input-item">
              <label>Curso:</label>
              <input 
                type="text" 
                value={curso} 
                onChange={(e) => setCurso(e.target.value)} 
                placeholder="Curso relacionado" 
              />
            </div>
          </div>
        </div>

        {/* Campo Comentários do Relator - Horizontal, à direita */}
        <div className="comentarios-relator">
          <label>Comentários do Relator:</label>
          <textarea className="textBox"
            value={comentariosRelator}
            onChange={(e) => setComentariosRelator(e.target.value)}
            placeholder="Deixe seus comentários"
          />
        </div>

        {/* Botão de envio */}
        <button onClick={handleSubmit}>Enviar</button>
      </div>
    </div>
  );
}

export default AvaliacaoProjetos;
