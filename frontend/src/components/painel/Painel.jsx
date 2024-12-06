import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importando o useNavigate
import './Painel.scss'; // Certifique-se de criar um arquivo de estilo para o painel, caso ainda não tenha

function Painel() {
  const navigate = useNavigate(); // Hook para navegação

  // Função para lidar com o clique no botão de logout
  const handleLogout = () => {
    // Aqui você pode limpar qualquer dado de sessão, como o token, se necessário
    navigate('/login'); // Redireciona para a página de login
  };

  // Função para lidar com o clique no item de "Gerenciamento de Usuários"
  const handleGerenciamento = () => {
    navigate('/gerenciamentoUsuario'); // Redireciona para a página de gerenciamento
  };

  // Função para lidar com o clique no item "Dashboard"
  const handleDashboard = () => {
    navigate('/home'); // Redireciona para a página de dashboard (home)
  };

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
        <div className="painel-content" onClick={handleDashboard}>
          <div className="user-icon">
            <i className="dashboard-icon fas fa-th-large"></i>
            <span className="user-name">Dashboard</span>
          </div>
        </div>

        {/* Alteração aqui - ao clicar, vai para /gerenciamento */}
        <div className="painel-content" onClick={handleGerenciamento}>
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
        <div className="painel-content-logout" onClick={handleLogout}>
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
