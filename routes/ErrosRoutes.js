const express = require('express');
const erroscontroller = require('../controllers/ErrosController');
const router = express.Router();
const clientesController = require('../controllers/ErrosController');

router.get('/erroemail', erroscontroller.email);

router.get('/erroemailexistente', erroscontroller.emailexistente);

router.get('/errolorgadouro', erroscontroller.logradouro);

router.get('/erronome', erroscontroller.nome);

router.get('/errosenha', erroscontroller.senha);

router.get('/errosenhaexistente', erroscontroller.senhainvalida);

router.get('/errotodoscampos', erroscontroller.todoscampos);

module.exports = router;
