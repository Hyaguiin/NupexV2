import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Login.scss'; 
import { loginUsuario } from '../../services/createUsuario'; 
import { toast, ToastContainer } from 'react-toastify'; // Importando toast e ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Importando o CSS do toast

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const navigate = useNavigate(); // Hook para navegação

  // Função para lidar com a mudança de valores nos campos de input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Tenta realizar o login
      const { username, password } = credentials;
      const response = await loginUsuario({ email: username, senha: password });
  
      // Exibe uma notificação de sucesso
      toast.success("Login bem-sucedido!");
  
      // Armazena o token no localStorage e redireciona
      localStorage.setItem('token', response.token);
  
      // Adiciona um delay antes de redirecionar
      setTimeout(() => {
        navigate('/home');
      }, 1000); // Aguarda 1 segundo antes de navegar
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      toast.error('Email ou senha incorretos. Tente novamente!'); // Exibe uma notificação de erro
    }
  };
  

  return (
    <div className="login-container">
      {/* Adicionando o ToastContainer aqui */}
      <ToastContainer />

      <div className="form-container">
        <div className="logo">
          <div className="container-name">
            <img
              className="logoFacisa"
              src="https://upload.wikimedia.org/wikipedia/commons/6/66/Unifacisabasquete.png"
              alt="Logo Facisa"
            />
            <h1>Gestão <span className="cor">Nupex</span></h1>
          </div>
        </div>
        <h2>Bem vindo ao Nupex!</h2>
        <p>
          Transforme a gestão dos seus projetos educacionais com o Nupex, a
          plataforma completa para coordenadores e professores.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="input-group" id="email">
            <label htmlFor="email">Seu Email</label>
            <input
              id="email"
              type="email"
              name="username"
              value={credentials.username}
              onChange={handleChange}
              placeholder="Email@mail.com"
              required
            />
          </div>

          <div className="input-group-senha">
            <div className="input-group">
              <label htmlFor="senha">Senha</label>
              <input
                id="senha"
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                placeholder="Sua Senha"
                required
              />
            </div>
          </div>

          <div className="terms">
            <input type="checkbox" id="termos" />
            <label htmlFor="termos">Lembrar dispositivo</label>
          </div>

          <button type="submit" className="btn-primary">
            Entrar
          </button>

          <p>Ainda não é registrado? <a href="#" className="link" onClick={() => navigate('/register')}>Crie uma conta</a></p>
        </form>
      </div>

      <div className="image-container">
      <img src="/assets/images/nupex.PNG" alt="Exemplo Foto Nupex" />
      </div>
    </div>
  );
};

export default Login;
