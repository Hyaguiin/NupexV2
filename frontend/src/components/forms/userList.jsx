import React, { useState, useEffect } from 'react';
import { getAllUsuario } from '../../services/createUsuario';
import './userList.scss'


function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Função para carregar os usuários
  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const usuariosData = await getAllUsuario(); // Chama a função para obter os dados
        setUsuarios(usuariosData); // Atualiza o estado com os dados recebidos
        setLoading(false); // Finaliza o carregamento
      } catch (err) {
        setError('Erro ao carregar os usuários'); // Define o erro se ocorrer
        setLoading(false); // Finaliza o carregamento
      }
    };

    fetchUsuarios(); // Chama a função ao montar o componente
  }, []);

  // Exibe a mensagem de carregamento ou erro
  if (loading) return <div>Carregando usuários...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="usuarios-list">
      <h2>Lista de Usuários</h2>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Cargo</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.nome}</td>
              <td>{usuario.email}</td>
              <td>{usuario.coordenador_ou_professor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaUsuarios;
