-- DROP TABLE IF EXISTS projeto_nupex;

CREATE TABLE projeto_nupex (
  id SERIAL PRIMARY KEY,
  projeto VARCHAR(255) NOT NULL,
  periodicidade VARCHAR(100) NOT NULL,
  modalidade VARCHAR(100) NOT NULL,
  titulo VARCHAR(255) NOT NULL,
  professor_coordenador VARCHAR(100) NOT NULL,  -- Alterado para 100 caracteres
  email_coordenador VARCHAR(255) NOT NULL,  -- Alterado para 255 caracteres
  professor_colaborador VARCHAR(255) NOT NULL,
  email_colaborador VARCHAR(255) NOT NULL,  -- Alterado para 255 caracteres
  curso_coordenador VARCHAR(100) NOT NULL,
  curso_colaborador VARCHAR(100) NOT NULL,
  telefone_coordenador VARCHAR(20) NOT NULL,  -- Alterado para 20 caracteres
  telefone_colaborador VARCHAR(20) NOT NULL,  -- Alterado para 20 caracteres
  resumo TEXT NOT NULL,  -- Novo campo
  palavra_chave VARCHAR(255) NOT NULL,  -- Novo campo
  justificativa TEXT NOT NULL,  -- Novo campo
  objetivos TEXT NOT NULL,  -- Novo campo
  fundamentacao_teorica TEXT NOT NULL,  -- Novo campo
  metodologia TEXT NOT NULL,  -- Novo campo
  referencias TEXT NOT NULL  -- Novo campo
);

-- Garantir que a tabela tenha a propriedade de proprietário
ALTER TABLE IF EXISTS public.projeto_nupex
    OWNER TO postgres;



CREATE TABLE usuario (
    id SERIAL PRIMARY KEY,  -- ID único para cada usuário
    nome VARCHAR(255) NOT NULL,  -- Nome do usuário
    sobrenome VARCHAR(255) NOT NULL,  -- Sobrenome do usuário
    coordenador_ou_professor VARCHAR(50) NOT NULL,  -- Tipo de usuário, coordenador ou professor
    email VARCHAR(255) UNIQUE NOT NULL,  -- Email único
    senha VARCHAR(255) NOT NULL,  -- Senha do usuário
    aceita_termos_condicoes BOOLEAN,  -- Indica se o usuário aceitou os termos
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- Data de criação do usuário
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP  -- Data da última atualização
);



