const express = require('express');
const router = express.Router();
const pagamentoController = require('../controllers/PagamentoController');

router.get('/', pagamentoController.index);

router.post('/', pagamentoController.create);

router.put('/:id', pagamentoController.update);

router.delete('/:id', pagamentoController.delete);

module.exports = router;
