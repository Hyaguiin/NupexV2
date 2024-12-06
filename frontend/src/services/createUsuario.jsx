import axios from 'axios';
import BASE_URL from '../constants/base_url';

// Define a URL base para as requisições da tabela de funcionários
const URL = `${BASE_URL}/gerenciamentoUsuario`;

// Função para obter todos os funcionários
async function getAllUsuario() {
  try {
    const token = localStorage.getItem('token'); // Obtém o token do localStorage
    const response = await axios.get(URL, {
      headers: {
        "Authorization": `Bearer ${token}`, // Adicionando o token aqui
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar todos os funcionários:', error);
    throw error;
  }
}

// Função para obter um funcionário pelo ID
async function getUsuarioById(id) {
  try {
    const token = localStorage.getItem('token'); // Obtém o token do localStorage
    const response = await axios.get(`${URL}/${id}`, {
      headers: {
        "Authorization": `Bearer ${token}`, // Adicionando o token aqui
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar o funcionário com ID ${id}:`, error);
    throw error;
  }
}

// Função para inserir um novo funcionário
async function createUsuario(data) {
  try {
    const token = localStorage.getItem('token'); // Obtém o token do localStorage
    const response = await axios.post(URL, data, {
      headers: {
        "Authorization": `Bearer ${token}`, // Adicionando o token aqui
      },
    });
    return response;
  } catch (error) {
    console.error('Erro ao criar um novo funcionário:', error);
    throw error;
  }
}

// Função para atualizar um funcionário
async function updateUsuario(id, data) {
  try {
    const token = localStorage.getItem('token'); // Obtém o token do localStorage
    const response = await axios.put(`${URL}/${id}`, data, {
      headers: {
        "Authorization": `Bearer ${token}`, // Adicionando o token aqui
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Erro ao atualizar o funcionário com ID ${id}:`, error);
    throw error;
  }
}

// Função para deletar um funcionário
async function deleteUsuario(id) {
  try {
    const token = localStorage.getItem('token'); // Obtém o token do localStorage
    const response = await axios.delete(`${URL}/${id}`, {
      headers: {
        "Authorization": `Bearer ${token}`, // Adicionando o token aqui
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Erro ao deletar o funcionário com ID ${id}:`, error);
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