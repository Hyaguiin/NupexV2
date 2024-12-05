import React, { useState } from 'react';
import './home.scss';
import FormularioPaginado from '../../components/forms/formPages';
import ListaProjetos from '../../components/forms/formList';
import Painel from '../../components/painel/Painel'; // Importando o componente Painel

function Home() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="app-management">
      <header className="header">
        <div className="container-name">
          <img
            className="logoFacisa"
            src="https://upload.wikimedia.org/wikipedia/commons/6/66/Unifacisabasquete.png"
            alt="Logo Facisa"
          />
          <h1 className="text-logo">
            Gestão <span className="cor">Nupex</span>
          </h1>
          <img
            className="aces"
            src="https://inclusivepixel.com/wp-content/uploads/noun_Accessibility_975768-1.png"
            alt=""
          />
        </div>
      </header>
      <div className="traco"></div>
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

      <Painel />

      {/* Link para Font Awesome */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
    </div>
  );
}

export default Home;
