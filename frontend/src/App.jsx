import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // Importe o AuthProvider
import Login from './components/login/login';
import Register from './components/register/register';
import Home from './screens/home/home'; // Página inicial
import FormGerenciamentoUsuarios from './screens/userMangmt/gerenciamentoUsuario'; // Página de gerenciamento de usuários
import Header from './components/header/Header';
import Painel from './components/painel/Painel'; // Componente Painel
import PrivateRoute from './components/private/privateRoute'; // Importe o PrivateRoute
import AdmissaoProjetos from './screens/admissaoProjeto/admissao'; // Página de Avaliação de Projetos

function Layout() {
  return (
    <div>
      <Header /> {/* O Header será exibido em todas as páginas */}
      <Painel /> {/* O Painel será exibido em todas as páginas */}
      <Outlet /> {/* Aqui as páginas específicas serão renderizadas */}
    </div>
  );
}

function App() {
  return (
    <AuthProvider> {/* Envolvendo o App com AuthProvider */}
      <Router>
        <Routes>
          {/* Layout será utilizado para renderizar todas as páginas com o Header e o Painel */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} /> {/* Página inicial */}
            <Route path="home" element={<Home />} /> {/* Adiciona a rota "/home" */}

            {/* Rota protegida para o gerenciamento de usuários */}
            <Route 
              path="gerenciamentoUsuario" 
              element={<PrivateRoute element={<FormGerenciamentoUsuarios />} />} 
            /> 

            {/* Rota protegida para Avaliação de Projetos */}
            <Route 
              path="admissaoProjeto" 
              element={<PrivateRoute element={<AdmissaoProjetos />} />} 
            /> 
          </Route>

          {/* Páginas de login e registro sem o Layout */}
          <Route path="login" element={<Login />} /> 
          <Route path="register" element={<Register />} /> 
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
