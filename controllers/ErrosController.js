const express = require('express');
const router = express.Router();

const erroscontroller = {
  email: (request, response) => {
    return response.render('redirect-middlewares/email');
  },

  emailexistente: (request, response) => {
    return response.render('redirect-middlewares/EmailExistente');
  },

  logradouro: (request, response) => {
    return response.render('redirect-middlewares/loradouro');
  },

  nome: (request, response) => {
    return response.render('redirect-middlewares/nome');
  },

  senha: (request, response) => {
    return response.render('redirect-middlewares/senha');
  },

  senhainvalida: (request, response) => {
    return response.render('redirect-middlewares/senhainvalida');
  },

  todoscampos: (request, response) => {
    return response.render('redirect-middlewares/todoscampos');
  },
};

module.exports = erroscontroller;
