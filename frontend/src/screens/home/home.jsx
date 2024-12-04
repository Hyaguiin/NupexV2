import React, { useState } from 'react';
import './home.scss'; // Supondo que você tenha um arquivo de estilo específico para esse componente
import FormularioPaginado from '../../components/forms/formPages';

function Home() {
  // Estado para controlar a exibição do formulário
  const [showForm, setShowForm] = useState(false);

  // Função para alternar a exibição do formulário
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

      {/* Mostra o formulário se showForm for verdadeiro */}
      {showForm && (
        <section>
          <FormularioPaginado />
        </section>
      )}

      <section>
        <div className="menu-projetos">
          <div className="menu-projetos-describe">
            <h4 className="content-describe">Nome</h4>
            <h4 className="content-describe">Descrição</h4>
            <h4 className="content-describe">Curso</h4>
            <h4 className="content-describe">Status</h4>
            <h4 className="content-describe">Ações</h4>
          </div>
        </div>
      </section>

      <div className="painel">
        <nav>
          <div className="painel-content-perfil">
            <div className="perfil">
              <img
                id="foto"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Ka3GhBZFUFekRFKz9BQTo6_xn5gWxf8wmg&s"
                alt="Super Calistenico"
              />
              <span className="nome">Ian Barseagle</span>
            </div>
          </div>

          <div className="painel-content">
            <div className="user-icon">
              <i className="dashboard-icon fas fa-th-large"></i>
              <span className="user-name">Dashboard</span>
            </div>
          </div>

          <div className="painel-content">
            <div className="user-icon">
              <i className="fas fa-users"></i>
              <span className="user-name">Gerenciamento de Usuários</span>
            </div>
          </div>

          <div className="painel-content">
            <div className="user-icon">
              <i className="fas fa-tasks"></i>
              <span className="user-name">Gerenciamento de Projetos</span>
            </div>
          </div>

          <div className="painel-content">
            <div className="user-icon">
              <i className="gerenciamentoProjeto fas fa-star"></i>
              <span className="user-name">Avaliação de Projetos</span>
            </div>
          </div>

          <div className="painel-content">
            <div className="user-icon">
              <i className="fas fa-clipboard-list"></i>
              <span className="user-name">Admissão</span>
            </div>
          </div>

          <div className="painel-content">
            <div className="user-icon">
              <i className="gerenciamentoProjeto fas fa-book"></i>
              <span className="user-name">Avaliação</span>
            </div>
          </div>

          <div className="painel-content">
            <div className="user-icon">
              <i className="gerenciamentoProjeto fas fa-medal"></i>
              <span className="user-name">Ranking</span>
            </div>
          </div>

          <div className="painel-content">
            <div className="user-icon">
              <i className="gerenciamentoProjeto fas fa-question-circle"></i>
              <span className="user-name">Obter Ajuda</span>
            </div>
          </div>

          <div className="painel-content">
            <div className="user-icon">
              <i className="dashboard-icon fas fa-cog"></i>
              <span className="user-name">Configurações</span>
            </div>
          </div>

          <div className="traco-logout"></div>

          <div className="painel-content-logout">
            <div className="user-icon">
              <i className="dashboard-icon fas fa-sign-out-alt"></i>
              <span className="user-name">Logout</span>
            </div>
          </div>

          <div className="painel-content"></div>
        </nav>
      </div>

      {/* Link para Font Awesome */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
    </div>
  );
}

export default Home;
