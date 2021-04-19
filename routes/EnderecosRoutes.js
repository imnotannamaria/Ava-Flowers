const express = require('express');
const router = express.Router();
const enderecosController = require('../controllers/EnderecosController');
<<<<<<< HEAD
const ValidarEndereco = require('../middlewares/ValidarEndereco');

router.get('/', enderecosController.index);

router.post('/', ValidarEndereco, enderecosController.create);
=======

router.get('/', enderecosController.index);

router.post('/', enderecosController.create);
>>>>>>> de1e02cbb41224ee47b80a4393c66fddd87f3d2f

router.put('/:id', enderecosController.update);

router.delete('/:id', enderecosController.delete);

module.exports = router;
<<<<<<< HEAD
=======

//comentario
>>>>>>> de1e02cbb41224ee47b80a4393c66fddd87f3d2f
