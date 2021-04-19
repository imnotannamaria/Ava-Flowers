const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientesController');
const validarCadastro = require('../middlewares/ValidarCadastro');

router.get('/', clientesController.index);

router.post('/', validarCadastro, clientesController.create);

router.put('/:id', clientesController.update);

router.delete('/:id', clientesController.delete);

module.exports = router;
