const validarRequisicao = require('../middleware/validarRequisicao.js')
const express = require('express')
const router = express.Router()
const loginSchema = require('../schema/loginSchema.js')
const ProjetoController = require('../controllers/projetoController.js');
const UsuarioController = require('../controllers/UsuarioController.js')


router.post('/projeto_nupex', ProjetoController.insert);
router.get('/projeto_nupex', ProjetoController.getAll);
router.get('/projeto_nupex/:id', ProjetoController.getById);
router.put('/projeto_nupex/:id', ProjetoController.update);
router.delete('/projeto_nupex/:id', ProjetoController.delete);


//P login
router.post('/login', validarRequisicao(loginSchema), UsuarioController.login)

module.exports = router;