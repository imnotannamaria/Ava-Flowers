const express = require ('express');
const router = express.Router();
const ProdutosController = require('../controllers/ProdutosController');
const ValidarProduto = require ('../middlewares/ValidarProduto')

router.get('/', ProdutosController.index);

router.post('/' , ValidarProduto, ProdutosController.create);

router.put('/:id' , ProdutosController.update);

router.delete('/:id', ProdutosController.delete);

module.exports = router;