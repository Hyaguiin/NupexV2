const joi = require('joi')

const funcionarioSchema = joi.object({
  id: joi.number().integer().optional().messages({
    'number.base': 'O campo ID deve ser um número.',
    'number.integer': 'O campo ID deve ser um número inteiro.',
  }),

  nome: joi.string().max(100).required().messages({
    'string.max': 'O campo nome pode ter no máximo 100 caracteres.',
    'any.required': 'O campo nome é obrigatório.',
    'string.empty': 'O campo nome é obrigatório.',
  }),

  sobrenome: joi.string().max(100).required().messages({
    'string.max': 'O campo sobrenome pode ter no máximo 100 caracteres.',
    'any.required': 'O campo sobrenome é obrigatório.',
    'string.empty': 'O campo sobrenome é obrigatório.',
  }),

  coordenador_ou_professor: joi.string().valid('coordenador', 'professor').required().messages({
    'any.required': 'O campo coordenador_ou_professor é obrigatório.',
    'string.empty': 'O campo coordenador_ou_professor é obrigatório.',
    'any.only': 'O campo coordenador_ou_professor deve ser "coordenador" ou "professor".',
  }),

  email: joi.string().email().max(100).required().messages({
    'string.email': 'E-mail inválido.',
    'string.max': 'O campo e-mail pode ter no máximo 100 caracteres.',
    'string.empty': 'O campo e-mail é obrigatório.',
    'any.required': 'O campo e-mail é obrigatório.',
  }),

  senha: joi.string().min(4).max(255).required().messages({
    'any.required': 'O campo senha é obrigatório.',
    'string.empty': 'O campo senha é obrigatório.',
    'string.min': 'O campo senha deve conter no mínimo 4 caracteres.',
    'string.max': 'O campo senha pode ter no máximo 255 caracteres.',
  }),

  aceita_termos_condicoes: joi.boolean().valid(true).required().messages({
    'any.required': 'O campo aceita_termos_condicoes é obrigatório.',
    'boolean.base': 'O campo aceita_termos_condicoes deve ser um valor booleano.',
    'any.only': 'O campo aceita_termos_condicoes deve ser "true".',
  }),
})

module.exports = funcionarioSchema
