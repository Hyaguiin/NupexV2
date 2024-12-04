import axios from 'axios';
import BASE_URL from '../constants/base_url';

// eslint-disable-next-line react-refresh/only-export-components
const URL = `${BASE_URL}/projetos`;

// Função para obter todos os projetos
async function getAllProjetos() {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(URL, {
      headers: {
        'Authorization': `Bearer ${token}` // Adicionando o token aqui
      }
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar todos os projetos:', error);
    throw error;
  }
}

// Função para obter um projeto pelo ID
async function getProjetoById(id) {
  try {
    const token = localStorage.getItem('token'); // Adicionando o token aqui
    const response = await axios.get(`${URL}/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar o projeto com ID ${id}:`, error);
    throw error;
  }
}

// Função para inserir um novo projeto
async function createProjeto(data) {
  try {
    const token = localStorage.getItem('token'); // Adicionando o token aqui
    const response = await axios.post(URL, data, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao criar um novo projeto:', error);
    throw error;
  }
}

// Função para atualizar um projeto
async function updateProjeto(id, data) {
  try {
    const token = localStorage.getItem('token'); // Adicionando o token aqui
    const response = await axios.put(`${URL}/${id}`, data, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error(`Erro ao atualizar o projeto com ID ${id}:`, error);
    throw error;
  }
}

// Função para deletar um projeto
async function deleteProjeto(id) {
  try {
    const token = localStorage.getItem('token'); // Adicionando o token aqui
    const response = await axios.delete(`${URL}/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error(`Erro ao deletar o projeto com ID ${id}:`, error);
    throw error;
  }
}

export {
  getAllProjetos,
  getProjetoById,
  createProjeto,
  updateProjeto,
  deleteProjeto
};
