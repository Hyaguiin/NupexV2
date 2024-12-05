import React, { useState } from "react";
import { deleteProjeto } from '../../services/formularioService'; // Adapte o serviço de acordo com sua estrutura
import './ProjectList.scss';

const ProjectList = ({ projeto }) => {  // Aqui você recebe o projeto específico
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Tem certeza de que deseja remover este projeto?");
    if (confirmDelete) {
      try {
        await deleteProjeto(id);
        // A lógica de remoção pode ser feita aqui ou no componente pai
      } catch (error) {
        setError("Erro ao deletar o projeto.");
      }
    }
  };

  if (!projeto) {
    return <div>Projeto não encontrado.</div>;
  }

  return (
    <div className="project-details">
      <ul>
        <li><strong>ID:</strong> {projeto.id}</li>
        <li><strong>Projeto:</strong> {projeto.projeto}</li>
        <li><strong>Periodicidade:</strong> {projeto.periodicidade}</li>
        <li><strong>Modalidade:</strong> {projeto.modalidade}</li>
        <li><strong>Título:</strong> {projeto.titulo}</li>
        <li><strong>Professor Coordenador:</strong> {projeto.professor_coordenador}</li>
        <li><strong>Email Coordenador:</strong> {projeto.email_coordenador}</li>
        <li><strong>Professor Colaborador:</strong> {projeto.professor_colaborador}</li>
        <li><strong>Email Colaborador:</strong> {projeto.email_colaborador}</li>
        <li><strong>Curso Coordenador:</strong> {projeto.curso_coordenador}</li>
        <li><strong>Curso Colaborador:</strong> {projeto.curso_colaborador}</li>
        <li><strong>Telefone Coordenador:</strong> {projeto.telefone_coordenador}</li>
        <li><strong>Telefone Colaborador:</strong> {projeto.telefone_colaborador}</li>
        <li><strong>Resumo:</strong> {projeto.resumo}</li>
        <li><strong>Palavra-chave:</strong> {projeto.palavra_chave}</li>
        <li><strong>Justificativa:</strong> {projeto.justificativa}</li>
        <li><strong>Objetivos:</strong> {projeto.objetivos}</li>
        <li><strong>Fundamentação Teórica:</strong> {projeto.fundamentacao_teorica}</li>
        <li><strong>Metodologia:</strong> {projeto.metodologia}</li>
        <li><strong>Referências:</strong> {projeto.referencias}</li>
      </ul>

      <button className="delete-btn" onClick={() => handleDelete(projeto.id)}>
        Remover
      </button>
    </div>
  );
};

export default ProjectList;
