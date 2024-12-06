import React, { useState } from 'react';
import { createUsuario } from '../../services/createUsuario'; // Importe a função createUsuario
import ListaUsuarios from '../../components/forms/userList'; // Importe o componente ListaUsuarios
import './gerenciamentoUsuario.scss';

function FormGerenciamentoUsuarios() {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    matricula: '',
    senha: '',
    email: '',
    coordenador_ou_professor: '', // O valor para cargo será atualizado com o select
  });

  // Função para manipular as mudanças no formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Função para enviar o formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Envia os dados para o backend
      const response = await createUsuario(formData);
      console.log('Usuário criado com sucesso:', response);
      // Aqui você pode adicionar qualquer lógica após o envio, como exibir uma mensagem de sucesso ou redirecionar
      alert('Usuário criado com sucesso');
    } catch (error) {
      console.error('Erro ao criar o usuário:', error);
      // Aqui você pode adicionar lógica para exibir uma mensagem de erro ao usuário
      alert('Erro ao criar o usuário');
    }
  };

  return (
    <div>
      <h4 className='user-Text'>Usuário/Criar Usuário</h4>
      <h1 className='user-user'>ADICIONAR USUÁRIO</h1>
      <div className="form-gerenciamento-usuarios">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Primeiro Nome"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                id="sobrenome"
                name="sobrenome"
                value={formData.sobrenome}
                onChange={handleChange}
                placeholder="Sobrenome"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                id="matricula"
                name="matricula"
                value={formData.matricula}
                onChange={handleChange}
                placeholder="Matrícula"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                id="senha"
                name="senha"
                value={formData.senha}
                onChange={handleChange}
                placeholder="Login"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
            </div>

            <div className="form-group">
              <select
                id="coordenador_ou_professor"
                name="coordenador_ou_professor"
                value={formData.coordenador_ou_professor}
                onChange={handleChange}
                required
              >
                <option value="">Selecione um cargo</option>
                <option value="coordenador">Coordenador</option>
                <option value="professor">Professor</option>
              </select>
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </div>

      {/* Aqui você chama o componente ListaUsuarios */}
      <ListaUsuarios />
    </div>
  );
}

export default FormGerenciamentoUsuarios;
