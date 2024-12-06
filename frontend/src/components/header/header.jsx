import React from 'react';

const Header = () => {
  return (
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
          alt="Ícone de Acessibilidade"
        />
      </div>
      <div className="traco"></div>
    </header>
  );
}

export default Header;
