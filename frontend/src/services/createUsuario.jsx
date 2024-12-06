import axios from 'axios';
import BASE_URL from '../constants/base_url';

// Define a URL base para as requisições da tabela de funcionários
const URL = `${BASE_URL}/usuario`;

// Função para obter todos os funcionários
async function getAllUsuario() {
  try {
    const token = localStorage.getItem('token'); // Obtém o token do localStorage
    if (!token) {
      console.error('Token não encontrado no localStorage');
      throw new Error('Token não encontrado');
    }

    const response = await axios.get(URL, {
      headers: {
        "Authorization": `Bearer ${token}`, // Adicionando o token aqui
        "Content-Type": "application/json", // Garantindo que o tipo de conteúdo seja JSON
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar todos os funcionários:', error);

    // Log detalhado do erro
    if (error.response) {
      console.error('Erro da resposta do servidor:', error.response.data);
      console.error('Status do erro:', error.response.status);
    }

    throw error;
  }
}

// Função para obter um funcionário pelo ID
async function getUsuarioById(id) {
  try {
    const token = localStorage.getItem('token'); // Obtém o token do localStorage
    if (!token) {
      console.error('Token não encontrado no localStorage');
      throw new Error('Token não encontrado');
    }

    const response = await axios.get(`${URL}/${id}`, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar o funcionário com ID ${id}:`, error);

    // Log detalhado do erro
    if (error.response) {
      console.error('Erro da resposta do servidor:', error.response.data);
      console.error('Status do erro:', error.response.status);
    }

    throw error;
  }
}

// Função para inserir um novo funcionário
async function createUsuario(data) {
  try {
    const token = localStorage.getItem('token'); // Obtém o token do localStorage
    if (!token) {
      console.error('Token não encontrado no localStorage');
      throw new Error('Token não encontrado');
    }

    const response = await axios.post(URL, data, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json", // Garantindo que o tipo de conteúdo seja JSON
      },
    });
    return response;
  } catch (error) {
    console.error('Erro ao criar um novo funcionário:', error);

    // Log detalhado do erro
    if (error.response) {
      console.error('Erro da resposta do servidor:', error.response.data);
      console.error('Status do erro:', error.response.status);
    }

    throw error;
  }
}

// Função para atualizar um funcionário
async function updateUsuario(id, data) {
  try {
    const token = localStorage.getItem('token'); // Obtém o token do localStorage
    if (!token) {
      console.error('Token não encontrado no localStorage');
      throw new Error('Token não encontrado');
    }

    const response = await axios.put(`${URL}/${id}`, data, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Erro ao atualizar o funcionário com ID ${id}:`, error);

    // Log detalhado do erro
    if (error.response) {
      console.error('Erro da resposta do servidor:', error.response.data);
      console.error('Status do erro:', error.response.status);
    }

    throw error;
  }
}

// Função para deletar um funcionário
async function deleteUsuario(id) {
  try {
    const token = localStorage.getItem('token'); // Obtém o token do localStorage
    if (!token) {
      console.error('Token não encontrado no localStorage');
      throw new Error('Token não encontrado');
    }

    const response = await axios.delete(`${URL}/${id}`, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Erro ao deletar o funcionário com ID ${id}:`, error);

    // Log detalhado do erro
    if (error.response) {
      console.error('Erro da resposta do servidor:', error.response.data);
      console.error('Status do erro:', error.response.status);
    }

    throw error;
  }
}

// Função para fazer login
async function loginUsuario(data) {
  try {
    const response = await axios.post(`${BASE_URL}/login`, data);
    return response.data;
  } catch (error) {
    console.error('Erro ao fazer login:', error);

    // Log detalhado do erro
    if (error.response) {
      console.error('Erro da resposta do servidor:', error.response.data);
      console.error('Status do erro:', error.response.status);
    }

    throw error;
  }
}

export {
  getAllUsuario,
  getUsuarioById,
  createUsuario,
  updateUsuario,
  deleteUsuario,
  loginUsuario,
};
