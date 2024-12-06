import React, { useState } from 'react';
import './home.scss';
import FormularioPaginado from '../../components/forms/formPages';
import ListaProjetos from '../../components/forms/formList';
import Painel from '../../components/painel/Painel'; // Importando o componente Painel
import Header from '../../components/header/Header'; // Importando o Header
import FormGerenciamentoUsuarios from '../userMangmt/gerenciamentoUsuario'; 

function Home() {
  const [showForm, setShowForm] = useState(false);
  const [showGerenciamento, setShowGerenciamento] = useState(false); 

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const toggleGerenciamento = () => {
    setShowGerenciamento(!showGerenciamento); // Alterna a visibilidade do componente de gerenciamento
  };

  return (
    <div className="app-management">
      
      
      <h1 className="Projetos">
        <span className="projeto-cor">Meus Projetos</span>
      </h1>

      <div className="Submeter-Projeto">
        <button onClick={toggleForm}>
          <h2>
            <span className="Submeter-Cor">Submeter Projeto</span>
          </h2>
        </button>
      </div>

      {showForm && (
        <section>
          <FormularioPaginado />
        </section>
      )}

      <section>
        <ListaProjetos />
      </section>

      {/* Renderiza o painel */}
      <Painel onGerenciamentoClick={toggleGerenciamento} />

      {/* Renderiza o componente de gerenciamento de usuários se o estado showGerenciamento for true */}
      {showGerenciamento && <FormGerenciamentoUsuarios />}

      {/* Link para Font Awesome */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
    </div>
  );
}

export default Home;
