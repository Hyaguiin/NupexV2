import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'; 
import Home from './screens/home/home'; // Página inicial
import FormGerenciamentoUsuarios from './screens/userMangmt/gerenciamentoUsuario'; // Página de gerenciamento de usuários
import Header from './components/header/header'; // Componente Header
import Painel from './components/painel/Painel'; // Componente Painel

// Layout principal que inclui Header e Painel
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
    <Router>
      <Routes>
        {/* Layout será utilizado para renderizar todas as páginas com o Header e o Painel */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* Página inicial */}
          <Route path="home" element={<Home />} /> {/* Adiciona a rota "/home" */}
          <Route path="gerenciamentoUsuario" element={<FormGerenciamentoUsuarios />} /> {/* Página de gerenciamento */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
