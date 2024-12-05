import React, { useState } from "react";
import ProjectList from "../forms/ProjectList";

const ParentComponent = () => {
  const [selectedProjeto, setSelectedProjeto] = useState(null);

  const handleClose = () => {
    setSelectedProjeto(null); // Fecha o projeto ou popup, removendo o projeto selecionado
  };

  return (
    <div>
      {/* Aqui você pode passar um projeto específico */}
      {selectedProjeto && (
        <ProjectList projeto={selectedProjeto} onClose={handleClose} />
      )}
      
      {/* Aqui poderia haver um botão para selecionar o projeto */}
    </div>
  );
};

export default ParentComponent;
