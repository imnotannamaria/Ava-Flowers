const express = require('express');
const router = express.Router();
const PedidosController = require('../controllers/PedidosController');
const ValidarPedido = require('../middlewares/ValidarPedido');

router.get('/', PedidosController.index);

router.post('/', ValidarPedido, PedidosController.create);

router.put('/:id', PedidosController.update);

router.delete('/:id', PedidosController.delete);

module.exports = router;
