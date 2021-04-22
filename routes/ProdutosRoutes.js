const express = require ('express');
const router = express.Router();
const ProdutosController = require('../controllers/ProdutosController');
//const ValidarProduto = require ('../middlewares/ValidarProduto')

router.get('/', ProdutosController.index);

router.post('/' , ProdutosController.create);

router.put('/:id' , ProdutosController.update);

router.delete('/:id', ProdutosController.delete);

module.exports = router;

const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/produtosController');
const validarProduto = require('../middlewares/ValidarProduto');

router.get('/', produtosController.index);

router.post('/', validarProduto, produtosController.create);

router.put('/:id', produtosController.update);

router.delete('/:id', produtosController.delete);

module.exports = router;
