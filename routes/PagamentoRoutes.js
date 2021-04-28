const express = require('express');
const router = express.Router();
const pagamentoController = require('../controllers/PagamentoController');
const ValidarPagamento = require('../middlewares/ValidarPagamento');

router.get('/', pagamentoController.index);

router.get('/cadastro', pagamentoController.cadastro);

router.get('/login', pagamentoController.login);

router.get('/confirmacao', pagamentoController.confirmacao);

router.post('/', ValidarPagamento, pagamentoController.create);

router.put('/:id', pagamentoController.update);

router.delete('/:id', pagamentoController.delete);

module.exports = router;
