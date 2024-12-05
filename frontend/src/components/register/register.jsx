import React, { useState } from "react";
import { toast } from "react-toastify";
import { createUsuario } from "../../services/createUsuario";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'; // Importando o useNavigate
import './register.scss'; 

const Register = () => {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    cargo: '',
    email: '',
    senha: '',
    senhaConfirm: '',
    aceitaTermos: false,
  });

  const navigate = useNavigate(); // Hook para navegação

  // Função para alterar os campos do formulário
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Função para gerenciar o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verificando se as senhas coincidem
    if (formData.senha !== formData.senhaConfirm) {
      toast.error("As senhas não coincidem.");
      return;
    }

    // Verificando se os termos foram aceitos
    if (!formData.aceitaTermos) {
      toast.error("Você deve aceitar os termos e condições.");
      return;
    }

    try {
      const response = await createUsuario(formData); // Supondo que você tenha essa função para registrar o usuário

      if (response.status === 201) {
        toast.success("Cadastro realizado com sucesso!");
        setFormData({
          nome: '',
          sobrenome: '',
          cargo: '',
          email: '',
          senha: '',
          senhaConfirm: '',
          aceitaTermos: false,
        });
      } else {
        throw new Error(response.message || "Erro ao cadastrar.");
      }
    } catch (error) {
      toast.error(error.message || "Erro ao registrar.");
    }
  };

  return (
    <div className="cadastro-container">
      <ToastContainer />
      <div className="form-container">
        <div className="logo">
          <div className="container-name">
            <img className="logoFacisa" src="https://upload.wikimedia.org/wikipedia/commons/6/66/Unifacisabasquete.png" alt="Logo Facisa" />
            <h1>Gestão <span className="cor">Nupex</span></h1>
          </div>
        </div>
        <h2>Bem-vindo ao Nupex!</h2>
        <p>Transforme a gestão dos seus projetos educacionais com o Nupex, a plataforma completa para coordenadores e professores.</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group-nome">
            <div className="input-group">
              <label htmlFor="nome">Nome</label>
              <input
                id="nome"
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Nome"
              />
            </div>
            
            <div className="input-group">
              <label htmlFor="sobrenome">Sobrenome</label>
              <input
                id="sobrenome"
                type="text"
                name="sobrenome"
                value={formData.sobrenome}
                onChange={handleChange}
                placeholder="Sobrenome"
              />
            </div>
          </div>

          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="cargo"
                value="coordenador"
                checked={formData.cargo === 'coordenador'}
                onChange={handleChange}
              />
              Coordenador
            </label>
            <label>
              <input
                type="radio"
                name="cargo"
                value="professor"
                checked={formData.cargo === 'professor'}
                onChange={handleChange}
              />
              Professor
            </label>
          </div>

          <div className="input-group" id="email">
            <label htmlFor="email">Seu Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email@mail.com"
            />
          </div>

          <div className="input-group-senha">
            <div className="input-group">
              <label htmlFor="senha">Senha</label>
              <input
                id="senha"
                type="password"
                name="senha"
                value={formData.senha}
                onChange={handleChange}
                placeholder="Sua Senha"
              />
            </div>

            <div className="input-group">
              <label htmlFor="senhaConfirm">Confirmar Senha</label>
              <input
                id="senhaConfirm"
                type="password"
                name="senhaConfirm"
                value={formData.senhaConfirm}
                onChange={handleChange}
                placeholder="Confirmar Senha"
              />
            </div>
          </div>

          <div className="terms">
            <input
              type="checkbox"
              id="termos"
              name="aceitaTermos"
              checked={formData.aceitaTermos}
              onChange={handleChange}
            />
            <label htmlFor="termos">
              Eu aceito os <a href="#" className="link">Termos e Condições</a>
            </label>
          </div>

          <button type="submit" className="btn-primary">Cadastrar</button>

          <p>Já tem uma conta? <a href="#" className="link" onClick={() => navigate('/login')}>Entrar</a></p> {/* Redireciona para /login */}
        </form>
      </div>

      <div className="image-container">
        <img src="../../../assets/img/nupex.PNG" alt="Exemplo Nupex" />
      </div>
    </div>
  );
};

export default Register;
