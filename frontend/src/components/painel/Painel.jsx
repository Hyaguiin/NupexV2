import React from 'react';
import './Painel.scss'; // Certifique-se de criar um arquivo de estilo para o painel, caso ainda não tenha

function Painel() {
  return (
    <div className="painel">
      <nav>
        {/* Seção de Perfil */}
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

        {/* Itens de Navegação */}
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

        {/* Seção de Logout */}
        <div className="painel-content-logout">
          <div className="user-icon">
            <i className="dashboard-icon fas fa-sign-out-alt"></i>
            <span className="user-name">Logout</span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Painel;
