import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import jwtDecode from 'jwt-decode';  // Corrigido para garantir que o jwtDecode é usado corretamente

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUserFromToken = () => {
      const token = localStorage.getItem("token");
      console.log("Verificando token no localStorage:", token);  // Log para verificar o token armazenado
      
      if (token) {
        try {
          const decodedToken = jwtDecode(token);  // Agora 'jwtDecode' deve funcionar corretamente
          console.log("Token decodificado:", decodedToken);  // Log para verificar o conteúdo do token decodificado
    
          const currentTime = Date.now() / 1000;  // Tempo atual em segundos
          console.log("Tempo atual:", currentTime);  // Log para verificar o tempo atual
    
          if (decodedToken.exp > currentTime) {
            console.log("Token válido, usuário autenticado.");  // Log indicando que o token é válido
            setUser({ ...decodedToken, token, role: decodedToken.role }); // Atualiza o estado do usuário
          } else {
            console.log("Token expirado, removendo do localStorage.");  // Log quando o token expirou
            localStorage.removeItem("token");
            setUser(null);
          }
        } catch (error) {
          console.error("Token inválido ou erro ao decodificar", error);  // Log de erro caso o token não seja válido
        }
      } else {
        console.log("Nenhum token encontrado no localStorage.");  // Log quando não houver token
        setUser(null);  // Se não houver token, remove o usuário
      }
      
      setLoading(false);  // Define que o carregamento foi concluído
      console.log("Loading completo.");  // Log indicando que o estado de carregamento foi atualizado
    };
    
    loadUserFromToken(); // Chama a função ao carregar o componente

    // Adiciona o listener para detectar mudanças no localStorage
    window.addEventListener("storage", loadUserFromToken);

    // Remove o listener quando o componente desmonta
    return () => {
      window.removeEventListener("storage", loadUserFromToken);
    };
  }, []); // Esse efeito será executado uma vez ao montar o componente

  const login = (token) => {
    try {
      const decodedToken = jwtDecode(token);  // Usando jwtDecode no login também
      localStorage.setItem("token", token);
      setUser({ ...decodedToken, token });
      console.log('Login realizado, usuário:', decodedToken); // Logando o login
    } catch (error) {
      console.error("Erro ao fazer login", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    console.log('Logout realizado, usuário removido');
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
