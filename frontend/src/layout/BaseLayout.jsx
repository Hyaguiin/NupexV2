import { Outlet } from "react-router-dom";
import Painel from "../components/painel/Painel"; // Importe o componente Painel
import Header from "../components/header/Header"; // Importe o componente Header
import './BaseLayout.scss'
const BaseLayout = () => {
  return (
    <main className="page-wrapper">
      {/* Header */}
      <Header />
      
      <div className="main-content">
        {/* left side of the page */}
        <div className="left-side">
          <Painel />
        </div>

        {/* right side/content of the page */}
        <div className="content-wrapper">
          <Outlet /> {/* A área onde as rotas dinâmicas serão renderizadas */}
        </div>
      </div>
    </main>
  );
};

export default BaseLayout;
