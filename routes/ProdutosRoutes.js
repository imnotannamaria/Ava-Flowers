const express = require ('express');
const router = express.Router();
const ProdutosController = require('../controllers/ProdutosController');

router.get('/', ProdutosController.index);

router.get('/carrinho', ProdutosController.carrinho);

router.get('/produto', ProdutosController.produto);

router.post('/' , ProdutosController.create);

router.put('/:id' , ProdutosController.update);

router.delete('/:id', ProdutosController.delete);

module.exports = router;

