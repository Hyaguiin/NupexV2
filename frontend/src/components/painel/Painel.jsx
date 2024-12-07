import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Importando o useNavigate
import { AuthContext } from '../../context/AuthContext'; // Importando o AuthContext
import './Painel.scss'; // Certifique-se de criar um arquivo de estilo para o painel, caso ainda não tenha

function Painel() {
  const navigate = useNavigate(); // Hook para navegação

  // Obtendo os dados do usuário do contexto
  const { user, logout } = useContext(AuthContext);

  // Função para lidar com o clique no botão de logout
  const handleLogout = () => {
    logout(); // Usando o logout do AuthContext
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

  const handleAdmissaoProjetos = () => {
    navigate('/admissaoProjeto'); // Redireciona para a página de avaliação de projetos
  };

  return (
    <div className="painel">
      <nav>
        {/* Seção de Perfil */}
        <div className="painel-content-perfil">
          <div className="perfil">
            {/* Exibindo a foto do usuário ou uma foto padrão */}
            <img
              id="foto"
              src={user?.foto || 'https://via.placeholder.com/150'} // Exibe foto do usuário ou uma foto padrão
              alt={user?.nome || 'Usuário'} // Exibe o nome ou "Usuário" se não existir
            />
            {/* Exibindo o nome completo do usuário */}
            <span className="nome">
              {user?.nome} {user?.sobrenome ? user.sobrenome : ''} {/* Exibe nome e sobrenome */}
            </span>
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

        {/* Outros itens */}
        <div className="painel-content" onClick={() => navigate('/gerenciamentoProjetos')}>
          <div className="user-icon">
            <i className="fas fa-tasks"></i>
            <span className="user-name">Gerenciamento de Projetos</span>
          </div>
        </div>

        <div className="painel-content">
          <div className="user-icon">
            <i className="fas fa-star"></i>
            <span className="user-name">Avaliação de Projetos</span>
          </div>
        </div>

        <div className="painel-content" onClick={handleAdmissaoProjetos}>
          <div className="user-icon">
            <i className="fas fa-clipboard-list"></i>
            <span className="user-name">Admissão</span>
          </div>
        </div>

        <div className="painel-content" onClick={() => navigate('/avaliacao')}>
          <div className="user-icon">
            <i className="fas fa-book"></i>
            <span className="user-name">Avaliação</span>
          </div>
        </div>

        <div className="painel-content" onClick={() => navigate('/ranking')}>
          <div className="user-icon">
            <i className="fas fa-medal"></i>
            <span className="user-name">Ranking</span>
          </div>
        </div>

        <div className="painel-content" onClick={() => navigate('/ajuda')}>
          <div className="user-icon">
            <i className="fas fa-question-circle"></i>
            <span className="user-name">Obter Ajuda</span>
          </div>
        </div>

        <div className="painel-content" onClick={() => navigate('/configuracoes')}>
          <div className="user-icon">
            <i className="fas fa-cog"></i>
            <span className="user-name">Configurações</span>
          </div>
        </div>

        <div className="traco-logout"></div>

        {/* Seção de Logout */}
        <div className="painel-content-logout" onClick={handleLogout}>
          <div className="user-icon">
            <i className="fas fa-sign-out-alt"></i>
            <span className="user-name">Logout</span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Painel;
