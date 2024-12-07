import React, { useState } from 'react';
import './avaliacaoProjeto.scss';

function AvaliacaoProjetos() {
  const [projeto, setProjeto] = useState('');
  const [modalidade, setModalidade] = useState('');
  const [proponente, setProponente] = useState('');
  const [curso, setCurso] = useState('');
  const [comentariosRelator, setComentariosRelator] = useState('');
  const [impactoCientifico, setImpactoCientifico] = useState('');
  const [viabilidadeCientifica, setViabilidadeCientifica] = useState('');
  const [adequacaoMetodologica, setAdequacaoMetodologica] = useState('');
  const [rejeicaoSumaria, setRejeicaoSumaria] = useState('');
  const [aprovacaoRelator, setAprovacaoRelator] = useState('');
  const [relevanciaProposta, setRelevanciaProposta] = useState('');
  const [estruturaProposta, setEstruturaProposta] = useState('');
  const [justificativa, setJustificativa] = useState('');

  const handleSubmit = () => {
    if (!projeto || !modalidade || !proponente || !curso || !comentariosRelator) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    console.log("Dados enviados", { projeto, modalidade, proponente, curso, comentariosRelator, impactoCientifico, viabilidadeCientifica, adequacaoMetodologica, rejeicaoSumaria, aprovacaoRelator, relevanciaProposta, estruturaProposta, justificativa });
    
    // Limpar os campos após o envio
    setProjeto('');
    setModalidade('');
    setProponente('');
    setCurso('');
    setComentariosRelator('');
    setImpactoCientifico('');
    setViabilidadeCientifica('');
    setAdequacaoMetodologica('');
    setRejeicaoSumaria('');
    setAprovacaoRelator('');
    setRelevanciaProposta('');
    setEstruturaProposta('');
    setJustificativa('');
  };

  return (
    <div className="avaliacao-projetos">
      <div className="container-formulario">
        <h1 className='tituloArea'>Formulário de Admissão de proposta do Projeto</h1>

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

        {/* Comentários do Relator */}
        <div className="comentarios-relator">
          <label>Comentários do Relator:</label>
          <textarea className="textBox"
            value={comentariosRelator}
            onChange={(e) => setComentariosRelator(e.target.value)}
            placeholder="Deixe seus comentários"
          />
        </div>

        {/* Critérios de Avaliação - Impacto Científico e Relevância Social */}
        <div className="criterios-analiticos">
        <h3>Grupo 01: Impacto Científico e Relevância Social</h3>
<div className="input-group-vertical">
  <div className="input-item">
    <label>A proposta tem potencial de contribuição para questões relevantes na realidade local, regional e nacional?</label>
    <div className="radio-group">
      <label>
        <input
          type="radio"
          name="impactoLocal"
          value="sim"
          // onChange={() => setValor('sim')}
        />
        Sim
      </label>
      <label>
        <input
          type="radio"
          name="impactoLocal"
          value="nao"
          // onChange={() => setValor('nao')}
        />
        Não
      </label>
      <label>
        <input
          type="radio"
          name="impactoLocal"
          value="na"
          // onChange={() => setValor('na')}
        />
        N/A
      </label>
    </div>
  </div>

  <div className="input-item">
    <label>A proposta tem potencial de produção de novos conhecimentos, capaz de contribuir com a comunidade científica?</label>
    <div className="radio-group">
      <label>
        <input
          type="radio"
          name="contribuicaoCientifica"
          value="sim"
          // onChange={() => setValor('sim')}
        />
        Sim
      </label>
      <label>
        <input
          type="radio"
          name="contribuicaoCientifica"
          value="nao"
          // onChange={() => setValor('nao')}
        />
        Não
      </label>
      <label>
        <input
          type="radio"
          name="contribuicaoCientifica"
          value="na"
          // onChange={() => setValor('na')}
        />
        N/A
      </label>
    </div>
  </div>

  <div className="input-item">
    <label>A proposta tem validade articulada à responsabilidade social?</label>
    <div className="radio-group">
      <label>
        <input
          type="radio"
          name="responsabilidadeSocial"
          value="sim"
          // onChange={() => setValor('sim')}
        />
        Sim
      </label>
      <label>
        <input
          type="radio"
          name="responsabilidadeSocial"
          value="nao"
          // onChange={() => setValor('nao')}
        />
        Não
      </label>
      <label>
        <input
          type="radio"
          name="responsabilidadeSocial"
          value="na"
          // onChange={() => setValor('na')}
        />
        N/A
      </label>
    </div>
  </div>
</div>

        </div>

        {/* Viabilidade Científica */}
        <div className="criterios-analiticos">
        <h3>Grupo 02: Viabilidade Científica</h3>
<div className="input-group-vertical">
  <div className="input-item">
    <label>A proposta guarda consonância com as linhas de pesquisas definidas e conformidade com as políticas institucionais?</label>
    <div className="radio-group">
      <label>
        <input
          type="radio"
          name="consonanciaLinhasPesquisa"
          value="sim"
          // onChange={() => setValor('sim')}
        />
        Sim
      </label>
      <label>
        <input
          type="radio"
          name="consonanciaLinhasPesquisa"
          value="nao"
          // onChange={() => setValor('nao')}
        />
        Não
      </label>
      <label>
        <input
          type="radio"
          name="consonanciaLinhasPesquisa"
          value="na"
          // onChange={() => setValor('na')}
        />
        N/A
      </label>
    </div>
  </div>

  <div className="input-item">
    <label>A proposta considera a articulação entre ensino, pesquisa e extensão, objetivando a melhoria e o fortalecimento dessas ações acadêmicas?</label>
    <div className="radio-group">
      <label>
        <input
          type="radio"
          name="articulacaoEnsinoPesquisaExtensao"
          value="sim"
          // onChange={() => setValor('sim')}
        />
        Sim
      </label>
      <label>
        <input
          type="radio"
          name="articulacaoEnsinoPesquisaExtensao"
          value="nao"
          // onChange={() => setValor('nao')}
        />
        Não
      </label>
      <label>
        <input
          type="radio"
          name="articulacaoEnsinoPesquisaExtensao"
          value="na"
          // onChange={() => setValor('na')}
        />
        N/A
      </label>
    </div>
  </div>

  <div className="input-item">
    <label>A proposta é cientificamente exequível?</label>
    <div className="radio-group">
      <label>
        <input
          type="radio"
          name="cientificamenteExequivel"
          value="sim"
          // onChange={() => setValor('sim')}
        />
        Sim
      </label>
      <label>
        <input
          type="radio"
          name="cientificamenteExequivel"
          value="nao"
          // onChange={() => setValor('nao')}
        />
        Não
      </label>
      <label>
        <input
          type="radio"
          name="cientificamenteExequivel"
          value="na"
          // onChange={() => setValor('na')}
        />
        N/A
      </label>
    </div>
  </div>
</div>

        </div>

        {/* Adequação Metodológica */}
        <div className="criterios-analiticos">
        <h3>Grupo 03: Adequação Metodológica</h3>
<div className="input-group-vertical">
  <div className="input-item">
    <label>A estrutura da proposta é coerente e fiel à metodologia recomendada pela literatura específica?</label>
    <div className="radio-group">
      <label>
        <input
          type="radio"
          name="estruturaCoerenteMetodologia"
          value="sim"
          // onChange={() => setValor('sim')}
        />
        Sim
      </label>
      <label>
        <input
          type="radio"
          name="estruturaCoerenteMetodologia"
          value="nao"
          // onChange={() => setValor('nao')}
        />
        Não
      </label>
      <label>
        <input
          type="radio"
          name="estruturaCoerenteMetodologia"
          value="na"
          // onChange={() => setValor('na')}
        />
        N/A
      </label>
    </div>
  </div>

  <div className="input-item">
    <label>A proposta apresenta adequação entre objetivos, referencial teórico e metodologia?</label>
    <div className="radio-group">
      <label>
        <input
          type="radio"
          name="adequacaoObjetivosReferencial"
          value="sim"
          // onChange={() => setValor('sim')}
        />
        Sim
      </label>
      <label>
        <input
          type="radio"
          name="adequacaoObjetivosReferencial"
          value="nao"
          // onChange={() => setValor('nao')}
        />
        Não
      </label>
      <label>
        <input
          type="radio"
          name="adequacaoObjetivosReferencial"
          value="na"
          // onChange={() => setValor('na')}
        />
        N/A
      </label>
    </div>
  </div>

  <div className="input-item">
    <label>O cronograma e os recursos e materiais indicados são suficientes para o desenvolvimento da proposta?</label>
    <div className="radio-group">
      <label>
        <input
          type="radio"
          name="cronogramaRecursosSuficientes"
          value="sim"
          // onChange={() => setValor('sim')}
        />
        Sim
      </label>
      <label>
        <input
          type="radio"
          name="cronogramaRecursosSuficientes"
          value="nao"
          // onChange={() => setValor('nao')}
        />
        Não
      </label>
      <label>
        <input
          type="radio"
          name="cronogramaRecursosSuficientes"
          value="na"
          // onChange={() => setValor('na')}
        />
        N/A
      </label>
    </div>
  </div>
</div>

        </div>

        {/* Aprovacao Relator */}
        <div className="criterios-analiticos">
          <h3>O relator sugere a aprovação da proposta?</h3>
          <div className="input-group-vertical">
            <div className="input-item">
              <label>
                <input 
                  type="radio"
                  value="sim"
                  checked={aprovacaoRelator === 'sim'}
                  onChange={(e) => setAprovacaoRelator(e.target.value)}
                />
                Sim
              </label>
              <label>
                <input 
                  type="radio"
                  value="nao"
                  checked={aprovacaoRelator === 'nao'}
                  onChange={(e) => setAprovacaoRelator(e.target.value)}
                />
                Não
              </label>
            </div>
          </div>
        </div>

        {/* Relevância da Proposta */}
        <div className="criterios-analiticos">
        <h3>Relevância da Proposta</h3>
<div className="input-group-vertical">
  <div className="input-item">
    <label>A proposta guarda identificação com os modelos de projeto de pesquisa/extensão?</label>
    <div className="radio-group">
      <label>
        <input
          type="radio"
          name="identificacaoModelo"
          value="0"
          // onChange={() => setValor('0')}
        />
        0
      </label>
      <label>
        <input
          type="radio"
          name="identificacaoModelo"
          value="1"
          // onChange={() => setValor('1')}
        />
        1
      </label>
      <label>
        <input
          type="radio"
          name="identificacaoModelo"
          value="2"
          // onChange={() => setValor('2')}
        />
        2
      </label>
      <label>
        <input
          type="radio"
          name="identificacaoModelo"
          value="3"
          // onChange={() => setValor('3')}
        />
        3
      </label>
      <label>
        <input
          type="radio"
          name="identificacaoModelo"
          value="4"
          // onChange={() => setValor('4')}
        />
        4
      </label>
      <label>
        <input
          type="radio"
          name="identificacaoModelo"
          value="5"
          // onChange={() => setValor('5')}
        />
        5
      </label>
      <label>
        <input
          type="radio"
          name="identificacaoModelo"
          value="6"
          // onChange={() => setValor('6')}
        />
        6
      </label>
      <label>
        <input
          type="radio"
          name="identificacaoModelo"
          value="7"
          // onChange={() => setValor('7')}
        />
        7
      </label>
      <label>
        <input
          type="radio"
          name="identificacaoModelo"
          value="8"
          // onChange={() => setValor('8')}
        />
        8
      </label>
      <label>
        <input
          type="radio"
          name="identificacaoModelo"
          value="9"
          // onChange={() => setValor('9')}
        />
        9
      </label>
      <label>
        <input
          type="radio"
          name="identificacaoModelo"
          value="10"
          // onChange={() => setValor('10')}
        />
        10
      </label>
    </div>
  </div>

  <div className="input-item">
    <label>A problematização formulada justifica a realização de um projeto de pesquisa/extensão?</label>
    <div className="radio-group">
      <label>
        <input
          type="radio"
          name="problematizacaoJustifica"
          value="0"
          // onChange={() => setValor('0')}
        />
        0
      </label>
      <label>
        <input
          type="radio"
          name="problematizacaoJustifica"
          value="1"
          // onChange={() => setValor('1')}
        />
        1
      </label>
      <label>
        <input
          type="radio"
          name="problematizacaoJustifica"
          value="2"
          // onChange={() => setValor('2')}
        />
        2
      </label>
      <label>
        <input
          type="radio"
          name="problematizacaoJustifica"
          value="3"
          // onChange={() => setValor('3')}
        />
        3
      </label>
      <label>
        <input
          type="radio"
          name="problematizacaoJustifica"
          value="4"
          // onChange={() => setValor('4')}
        />
        4
      </label>
      <label>
        <input
          type="radio"
          name="problematizacaoJustifica"
          value="5"
          // onChange={() => setValor('5')}
        />
        5
      </label>
      <label>
        <input
          type="radio"
          name="problematizacaoJustifica"
          value="6"
          // onChange={() => setValor('6')}
        />
        6
      </label>
      <label>
        <input
          type="radio"
          name="problematizacaoJustifica"
          value="7"
          // onChange={() => setValor('7')}
        />
        7
      </label>
      <label>
        <input
          type="radio"
          name="problematizacaoJustifica"
          value="8"
          // onChange={() => setValor('8')}
        />
        8
      </label>
      <label>
        <input
          type="radio"
          name="problematizacaoJustifica"
          value="9"
          // onChange={() => setValor('9')}
        />
        9
      </label>
      <label>
        <input
          type="radio"
          name="problematizacaoJustifica"
          value="10"
          // onChange={() => setValor('10')}
        />
        10
      </label>
    </div>
  </div>

  <div className="input-item">
    <label>Os objetivos propostos são claros, esmiuçando o intento geral e as fases do desdobramento do projeto de pesquisa/extensão?</label>
    <div className="radio-group">
      <label>
        <input
          type="radio"
          name="objetivosClaros"
          value="0"
          // onChange={() => setValor('0')}
        />
        0
      </label>
      <label>
        <input
          type="radio"
          name="objetivosClaros"
          value="1"
          // onChange={() => setValor('1')}
        />
        1
      </label>
      <label>
        <input
          type="radio"
          name="objetivosClaros"
          value="2"
          // onChange={() => setValor('2')}
        />
        2
      </label>
      <label>
        <input
          type="radio"
          name="objetivosClaros"
          value="3"
          // onChange={() => setValor('3')}
        />
        3
      </label>
      <label>
        <input
          type="radio"
          name="objetivosClaros"
          value="4"
          // onChange={() => setValor('4')}
        />
        4
      </label>
      <label>
        <input
          type="radio"
          name="objetivosClaros"
          value="5"
          // onChange={() => setValor('5')}
        />
        5
      </label>
      <label>
        <input
          type="radio"
          name="objetivosClaros"
          value="6"
          // onChange={() => setValor('6')}
        />
        6
      </label>
      <label>
        <input
          type="radio"
          name="objetivosClaros"
          value="7"
          // onChange={() => setValor('7')}
        />
        7
      </label>
      <label>
        <input
          type="radio"
          name="objetivosClaros"
          value="8"
          // onChange={() => setValor('8')}
        />
        8
      </label>
      <label>
        <input
          type="radio"
          name="objetivosClaros"
          value="9"
          // onChange={() => setValor('9')}
        />
        9
      </label>
      <label>
        <input
          type="radio"
          name="objetivosClaros"
          value="10"
          // onChange={() => setValor('10')}
        />
        10
      </label>
    </div>
  </div>

  <div className="input-item">
    <label>A proposta apresenta relevância social e vincula-se à realidade local, regional, nacional ou global?</label>
    <div className="radio-group">
      <label>
        <input
          type="radio"
          name="relevanciaSocial"
          value="0"
          // onChange={() => setValor('0')}
        />
        0
      </label>
      <label>
        <input
          type="radio"
          name="relevanciaSocial"
          value="1"
          // onChange={() => setValor('1')}
        />
        1
      </label>
      <label>
        <input
          type="radio"
          name="relevanciaSocial"
          value="2"
          // onChange={() => setValor('2')}
        />
        2
      </label>
      <label>
        <input
          type="radio"
          name="relevanciaSocial"
          value="3"
          // onChange={() => setValor('3')}
        />
        3
      </label>
      <label>
        <input
          type="radio"
          name="relevanciaSocial"
          value="4"
          // onChange={() => setValor('4')}
        />
        4
      </label>
      <label>
        <input
          type="radio"
          name="relevanciaSocial"
          value="5"
          // onChange={() => setValor('5')}
        />
        5
      </label>
      <label>
        <input
          type="radio"
          name="relevanciaSocial"
          value="6"
          // onChange={() => setValor('6')}
        />
        6
      </label>
      <label>
        <input
          type="radio"
          name="relevanciaSocial"
          value="7"
          // onChange={() => setValor('7')}
        />
        7
      </label>
      <label>
        <input
          type="radio"
          name="relevanciaSocial"
          value="8"
          // onChange={() => setValor('8')}
        />
        8
      </label>
      <label>
        <input
          type="radio"
          name="relevanciaSocial"
          value="9"
          // onChange={() => setValor('9')}
        />
        9
      </label>
      <label>
        <input
          type="radio"
          name="relevanciaSocial"
          value="10"
          // onChange={() => setValor('10')}
        />
        10
      </label>
    </div>
  </div>

  
  <div className="input-item">
    <label>A proposta detém potencial de contribuição científica (aprimoramento das formulações teóricas sobre o tema)?</label>
    <div className="radio-group">
      <label>
        <input
          type="radio"
          name="contribuicaoCientifica"
          value="0"
          // onChange={() => setValor('0')}
        />
        0
      </label>
      <label>
        <input
          type="radio"
          name="contribuicaoCientifica"
          value="1"
          // onChange={() => setValor('1')}
        />
        1
      </label>
      <label>
        <input
          type="radio"
          name="contribuicaoCientifica"
          value="2"
          // onChange={() => setValor('2')}
        />
        2
      </label>
      <label>
        <input
          type="radio"
          name="contribuicaoCientifica"
          value="3"
          // onChange={() => setValor('3')}
        />
        3
      </label>
      <label>
        <input
          type="radio"
          name="contribuicaoCientifica"
          value="4"
          // onChange={() => setValor('4')}
        />
        4
      </label>
      <label>
        <input
          type="radio"
          name="contribuicaoCientifica"
          value="5"
          // onChange={() => setValor('5')}
        />
        5
      </label>
      <label>
        <input
          type="radio"
          name="contribuicaoCientifica"
          value="6"
          // onChange={() => setValor('6')}
        />
        6
      </label>
      <label>
        <input
          type="radio"
          name="contribuicaoCientifica"
          value="7"
          // onChange={() => setValor('7')}
        />
        7
      </label>
      <label>
        <input
          type="radio"
          name="contribuicaoCientifica"
          value="8"
          // onChange={() => setValor('8')}
        />
        8
      </label>
      <label>
        <input
          type="radio"
          name="contribuicaoCientifica"
          value="9"
          // onChange={() => setValor('9')}
        />
        9
      </label>
      <label>
        <input
          type="radio"
          name="contribuicaoCientifica"
          value="10"
          // onChange={() => setValor('10')}
        />
        10
      </label>
    </div>
  </div>
   {/* Justificativa/Comentário */}
   <div className="comentarios-relator">
          <label>Justificativas/Comentário:</label>
          <textarea className="textBox"
            value={justificativa}
            onChange={(e) => setJustificativa(e.target.value)}
            placeholder="Deixe seus comentários"
          />
        </div>
</div>


        </div>

        {/* Estrutura da Proposta */}
        <div className="criterios-analiticos">
        <h3>Estrutura da Proposta</h3>
<div className="input-group-vertical">
  <div className="input-item">
    <label>A proposta está devidamente estruturada e consonante com as regras da ABNT?</label>
    <div className="radio-group">
      <label>
        <input
          type="radio"
          name="estruturaABNT"
          value="0"
          // onChange={() => setValor('0')}
        />
        0
      </label>
      <label>
        <input
          type="radio"
          name="estruturaABNT"
          value="1"
          // onChange={() => setValor('1')}
        />
        1
      </label>
      <label>
        <input
          type="radio"
          name="estruturaABNT"
          value="2"
          // onChange={() => setValor('2')}
        />
        2
      </label>
      <label>
        <input
          type="radio"
          name="estruturaABNT"
          value="3"
          // onChange={() => setValor('3')}
        />
        3
      </label>
      <label>
        <input
          type="radio"
          name="estruturaABNT"
          value="4"
          // onChange={() => setValor('4')}
        />
        4
      </label>
      <label>
        <input
          type="radio"
          name="estruturaABNT"
          value="5"
          // onChange={() => setValor('5')}
        />
        5
      </label>
      <label>
        <input
          type="radio"
          name="estruturaABNT"
          value="6"
          // onChange={() => setValor('6')}
        />
        6
      </label>
      <label>
        <input
          type="radio"
          name="estruturaABNT"
          value="7"
          // onChange={() => setValor('7')}
        />
        7
      </label>
      <label>
        <input
          type="radio"
          name="estruturaABNT"
          value="8"
          // onChange={() => setValor('8')}
        />
        8
      </label>
      <label>
        <input
          type="radio"
          name="estruturaABNT"
          value="9"
          // onChange={() => setValor('9')}
        />
        9
      </label>
      <label>
        <input
          type="radio"
          name="estruturaABNT"
          value="10"
          // onChange={() => setValor('10')}
        />
        10
      </label>
    </div>
  </div>

  <div className="input-item">
    <label>O referencial teórico é atual e adequado à proposta?</label>
    <div className="radio-group">
      <label>
        <input
          type="radio"
          name="referencialTeorico"
          value="0"
          // onChange={() => setValor('0')}
        />
        0
      </label>
      <label>
        <input
          type="radio"
          name="referencialTeorico"
          value="1"
          // onChange={() => setValor('1')}
        />
        1
      </label>
      <label>
        <input
          type="radio"
          name="referencialTeorico"
          value="2"
          // onChange={() => setValor('2')}
        />
        2
      </label>
      <label>
        <input
          type="radio"
          name="referencialTeorico"
          value="3"
          // onChange={() => setValor('3')}
        />
        3
      </label>
      <label>
        <input
          type="radio"
          name="referencialTeorico"
          value="4"
          // onChange={() => setValor('4')}
        />
        4
      </label>
      <label>
        <input
          type="radio"
          name="referencialTeorico"
          value="5"
          // onChange={() => setValor('5')}
        />
        5
      </label>
      <label>
        <input
          type="radio"
          name="referencialTeorico"
          value="6"
          // onChange={() => setValor('6')}
        />
        6
      </label>
      <label>
        <input
          type="radio"
          name="referencialTeorico"
          value="7"
          // onChange={() => setValor('7')}
        />
        7
      </label>
      <label>
        <input
          type="radio"
          name="referencialTeorico"
          value="8"
          // onChange={() => setValor('8')}
        />
        8
      </label>
      <label>
        <input
          type="radio"
          name="referencialTeorico"
          value="9"
          // onChange={() => setValor('9')}
        />
        9
      </label>
      <label>
        <input
          type="radio"
          name="referencialTeorico"
          value="10"
          // onChange={() => setValor('10')}
        />
        10
      </label>
    </div>
  </div>

  <div className="input-item">
    <label>A metodologia indicada contempla procedimentos adequados à consecução da proposta?</label>
    <div className="radio-group">
      <label>
        <input
          type="radio"
          name="metodologiaAdequada"
          value="0"
          // onChange={() => setValor('0')}
        />
        0
      </label>
      <label>
        <input
          type="radio"
          name="metodologiaAdequada"
          value="1"
          // onChange={() => setValor('1')}
        />
        1
      </label>
      <label>
        <input
          type="radio"
          name="metodologiaAdequada"
          value="2"
          // onChange={() => setValor('2')}
        />
        2
      </label>
      <label>
        <input
          type="radio"
          name="metodologiaAdequada"
          value="3"
          // onChange={() => setValor('3')}
        />
        3
      </label>
      <label>
        <input
          type="radio"
          name="metodologiaAdequada"
          value="4"
          // onChange={() => setValor('4')}
        />
        4
      </label>
      <label>
        <input
          type="radio"
          name="metodologiaAdequada"
          value="5"
          // onChange={() => setValor('5')}
        />
        5
      </label>
      <label>
        <input
          type="radio"
          name="metodologiaAdequada"
          value="6"
          // onChange={() => setValor('6')}
        />
        6
      </label>
      <label>
        <input
          type="radio"
          name="metodologiaAdequada"
          value="7"
          // onChange={() => setValor('7')}
        />
        7
      </label>
      <label>
        <input
          type="radio"
          name="metodologiaAdequada"
          value="8"
          // onChange={() => setValor('8')}
        />
        8
      </label>
      <label>
        <input
          type="radio"
          name="metodologiaAdequada"
          value="9"
          // onChange={() => setValor('9')}
        />
        9
      </label>
      <label>
        <input
          type="radio"
          name="metodologiaAdequada"
          value="10"
          // onChange={() => setValor('10')}
        />
        10
      </label>
    </div>
  </div>

  <div className="input-item">
    <label>Os meios e materiais indicados são adequados para o desenvolvimento da proposta?</label>
    <div className="radio-group">
      <label>
        <input
          type="radio"
          name="meiosMateriaisAdequados"
          value="0"
          // onChange={() => setValor('0')}
        />
        0
      </label>
      <label>
        <input
          type="radio"
          name="meiosMateriaisAdequados"
          value="1"
          // onChange={() => setValor('1')}
        />
        1
      </label>
      <label>
        <input
          type="radio"
          name="meiosMateriaisAdequados"
          value="2"
          // onChange={() => setValor('2')}
        />
        2
      </label>
      <label>
        <input
          type="radio"
          name="meiosMateriaisAdequados"
          value="3"
          // onChange={() => setValor('3')}
        />
        3
      </label>
      <label>
        <input
          type="radio"
          name="meiosMateriaisAdequados"
          value="4"
          // onChange={() => setValor('4')}
        />
         4
      </label>
      <label>
        <input
          type="radio"
          name="meiosMateriaisAdequados"
          value="5"
          // onChange={() => setValor('5')}
        />
        5
      </label>
      <label>
        <input
          type="radio"
          name="meiosMateriaisAdequados"
          value="6"
          // onChange={() => setValor('6')}
        />
        6
      </label>
      <label>
        <input
          type="radio"
          name="meiosMateriaisAdequados"
          value="7"
          // onChange={() => setValor('7')}
        />
        7
      </label>
      <label>
        <input
          type="radio"
          name="meiosMateriaisAdequados"
          value="8"
          // onChange={() => setValor('8')}
        />
        8
      </label>
      <label>
        <input
          type="radio"
          name="meiosMateriaisAdequados"
          value="9"
          // onChange={() => setValor('9')}
        />
        9
      </label>
      <label>
        <input
          type="radio"
          name="meiosMateriaisAdequados"
          value="10"
          // onChange={() => setValor('10')}
        />
        10
      </label>
    </div>
  </div>

  <div className="input-item">
    <label>O cronograma propõe execução viável do projeto?</label>
    <div className="radio-group">
      <label>
        <input
          type="radio"
          name="cronogramaViavel"
          value="0"
          // onChange={() => setValor('0')}
        />
        0
      </label>
      <label>
        <input
          type="radio"
          name="cronogramaViavel"
          value="1"
          // onChange={() => setValor('1')}
        />
        1
      </label>
      <label>
        <input
          type="radio"
          name="cronogramaViavel"
          value="2"
          // onChange={() => setValor('2')}
        />
        2
      </label>
      <label>
        <input
          type="radio"
          name="cronogramaViavel"
          value="3"
          // onChange={() => setValor('3')}
        />
        3
      </label>
      <label>
        <input
          type="radio"
          name="cronogramaViavel"
          value="4"
          // onChange={() => setValor('4')}
        />
        4
      </label>
      <label>
        <input
          type="radio"
          name="cronogramaViavel"
          value="5"
          // onChange={() => setValor('5')}
        />
        5
      </label>
      <label>
        <input
          type="radio"
          name="cronogramaViavel"
          value="6"
          // onChange={() => setValor('6')}
        />
        6
      </label>
      <label>
        <input
          type="radio"
          name="cronogramaViavel"
          value="7"
          // onChange={() => setValor('7')}
        />
        7
      </label>
      <label>
        <input
          type="radio"
          name="cronogramaViavel"
          value="8"
          // onChange={() => setValor('8')}
        />
        8
      </label>
      <label>
        <input
          type="radio"
          name="cronogramaViavel"
          value="9"
          // onChange={() => setValor('9')}
        />
        9
      </label>
      <label>
        <input
          type="radio"
          name="cronogramaViavel"
          value="10"
          // onChange={() => setValor('10')}
        />
        10
      </label>
    </div>
  </div>
  <div className="comentarios-relator">
    <label>Justificativas/Comentários</label>
    <textarea
      className="textBox"
      name="justificativasComentarios"
      // onChange={(e) => setValor(e.target.value)}
    />
  </div>

</div>

        </div>

        

       

        {/* Botão de envio */}
        <button onClick={handleSubmit}>Enviar</button>
      </div>
    </div>
  );
}

export default AvaliacaoProjetos;
