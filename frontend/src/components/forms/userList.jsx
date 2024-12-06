import React, { useState, useEffect } from 'react';
import { getAllUsuario, deleteUsuario } from '../../services/createUsuario';
import './userList.scss';

function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [selectedUsuario, setSelectedUsuario] = useState(null);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const data = await getAllUsuario();
        setUsuarios(data);
        setLoading(false);
      } catch (err) {
        setError('Erro ao carregar os usuários');
        setLoading(false);
      }
    };
    fetchUsuarios();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteUsuario(id);
      setUsuarios(usuarios.filter(usuario => usuario.id !== id));
    } catch (err) {
      setError('Erro ao excluir o usuário');
    }
  };

  const handleVisualizar = (usuario) => {
    setSelectedUsuario(usuario);
    setShowUserDetails(true);
  };

  const handleCloseModal = () => {
    setShowUserDetails(false);
    setSelectedUsuario(null);
  };

  if (loading) {
    return <div className="loading">Carregando usuários...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (usuarios.length === 0) {
    return <div className="no-users">Nenhum usuário encontrado.</div>;
  }

  return (
    <div className="usuarios-list">
      <div className="usuarios-header">
        <h4 className="header-item">Nome</h4>
        <h4 className="header-item">Email</h4>
        <h4 className="header-item">Status</h4>
        <h4 className="header-item">Ações</h4>
      </div>

      {usuarios.map((usuario) => (
        <div key={usuario.id} className="usuario-item">
          <div className="usuario-detail">
            <strong>Nome:</strong> <span>{usuario.nome}</span>
          </div>
          <div className="usuario-detail">
            <strong>Email:</strong> <span>{usuario.email}</span>
          </div>
          <div className="usuario-detail">
            <strong>Status:</strong> <span>{usuario.status}</span>
          </div>
          <div className="usuario-actions">
            <button className="action-btn" onClick={() => handleVisualizar(usuario)}>Visualizar</button>
            <button className="action-btn" onClick={() => handleDelete(usuario.id)}>Excluir</button>
          </div>
        </div>
      ))}

      {showUserDetails && selectedUsuario && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Detalhes do Usuário</h2>
            <button onClick={handleCloseModal}>Fechar</button>
            <div className="modal-body">
              <div><strong>Nome:</strong> {selectedUsuario.nome}</div>
              <div><strong>Email:</strong> {selectedUsuario.email}</div>
              <div><strong>Status:</strong> {selectedUsuario.status}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ListaUsuarios;
