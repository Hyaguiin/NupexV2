import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import jwtDecode from "jwt-decode";
import { getUsuarioById } from "../services/createUsuario"; // Importando o serviço que busca os dados do usuário

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Função para carregar o usuário a partir do token armazenado no localStorage
  const loadUserFromToken = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        console.log("Token decodificado:", decodedToken);
        const currentTime = Date.now() / 1000;

        if (decodedToken.exp > currentTime) {
          // O token é válido, agora buscar os dados do usuário
          const userData = await getUsuarioById(decodedToken.id); // Passa o id do usuário para buscar os dados completos
          console.log("Token válido, usuário autenticado.");
          console.log("Dados do usuário:", userData);
          setUser({ ...decodedToken, ...userData }); // Agora o estado do usuário inclui dados do serviço
        } else {
          console.log("Token expirado, removendo...");
          localStorage.removeItem("token");
          setUser(null);
        }
      } catch (error) {
        console.error("Erro ao decodificar o token ou buscar o usuário:", error);
        setUser(null); // Em caso de erro, remove o usuário
      }
    } else {
      console.log("Token não encontrado no localStorage.");
      setUser(null); // Caso não exista token
    }

    setLoading(false); // Defina o loading como false após a verificação do token
  };

  // Carrega o usuário sempre que o componente for montado
  useEffect(() => {
    loadUserFromToken();

    // Atualiza o usuário caso o token no localStorage seja alterado (por exemplo, após o logout)
    window.addEventListener("storage", loadUserFromToken);

    return () => {
      window.removeEventListener("storage", loadUserFromToken);
    };
  }, []); // Este useEffect é executado apenas uma vez ao montar o componente

  // Função para realizar o login
  const login = (token) => {
    try {
      const decodedToken = jwtDecode(token);
      console.log("Decoded Token no Login:", decodedToken);
      localStorage.setItem("token", token); // Armazena o token no localStorage
      setUser({ ...decodedToken }); // Atualiza o estado do usuário imediatamente após o login
    } catch (error) {
      console.error("Erro ao fazer login", error);
    }
  };

  // Função para realizar o logout
  const logout = () => {
    console.log("Logout realizado.");
    localStorage.removeItem("token"); // Remove o token do localStorage
    setUser(null); // Limpa o estado do usuário
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
