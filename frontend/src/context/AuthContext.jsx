import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import jwt_decode from 'jwt-decode'; // Use a importação padrão

// Criando o contexto
export const AuthContext = createContext();

// Provedor do contexto
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUserFromToken = () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const decodedToken = jwt_decode(token);  // A função de decodificação
          const currentTime = Date.now() / 1000;  // Tempo atual em segundos
          if (decodedToken.exp > currentTime) {
            setUser({ ...decodedToken, token, role: decodedToken.role });
          } else {
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

    loadUserFromToken();

    window.addEventListener("storage", loadUserFromToken);

    return () => {
      window.removeEventListener("storage", loadUserFromToken);
    };
  }, []);

  const login = (token) => {
    try {
      const decodedToken = jwt_decode(token);
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
