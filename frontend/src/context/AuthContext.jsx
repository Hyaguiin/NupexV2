import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import * as jwt from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUserFromToken = () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const decodedToken = jwt.jwtDecode(token);
          const currentTime = Date.now() / 1000; // Obtém o tempo atual em segundos
          if (decodedToken.exp > currentTime) {
            setUser({ ...decodedToken, token, role: decodedToken.role }); // Aqui estamos assumindo que `role` está presente no token
          } else {
            // Token expirou, então remove do localStorage
            localStorage.removeItem("token");
            setUser(null);
          }
        } catch (error) {
          console.error("Token inválido", error);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    };
    

    // Executa na montagem para verificar o token
    loadUserFromToken();

    // Adiciona o listener para detectar mudanças no localStorage
    window.addEventListener("storage", loadUserFromToken);

    // Remove o listener quando o componente desmonta
    return () => {
      window.removeEventListener("storage", loadUserFromToken);
    };
  }, []);

  const login = (token) => {
    try {
      const decodedToken = jwt.jwtDecode(token);
      localStorage.setItem("token", token);
      setUser({ ...decodedToken, token });
    } catch (error) {
      console.error("Erro ao fazer login", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
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
