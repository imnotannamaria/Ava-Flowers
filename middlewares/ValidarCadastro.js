//Middlewares = camada de proteção antes de chamar o controller
const { Cliente, sequelize } = require('../models');

module.exports = async (request, response, next) => {
  let {
    email,
    senha,
    nome,
    logradouro,
    cidade,
    estado,
    bairro,
    numero,
    complemento,
  } = request.body;

  let user = await Cliente.findAll({
    where: {
      email,
      senha,
      nome,
      logradouro,
      cidade,
      estado,
      bairro,
      numero,
      complemento,
    },
  });

  //se achar um usuário o array retornou 1 ou mais
  if (user.length) {
    response.status(400).redirect('/warning/emailexistente');
    return;
  } else {
    if (!email) {
      response.status(400).redirect('/warning/erroemail');
    } else {
      if (!senha) {
        response.status(400).redirect('/warning/errosenha');
      } else {
        if (!nome) {
          response.status(400).redirect('/warning/erronome');
        } else {
          if (senha.length < 6 || senha.length > 20) {
            response.status(400).redirect('/warning/errosenhainvalida');
          } else {
            if (!logradouro || !cidade || !estado || !bairro || !numero) {
              response.status(400).redirect('/warning/errotodoscampos');
            } else {
              if (logradouro.length < 5) {
                response.status(400).redirect('/warning/errologradouro');
              } else {
                if (2 > 1) {
                  const userExists = await Cliente.findOne({
                    where: { email: request.body.email },
                  });
                  // se existir, vou devolver uma mensagem de erro
                  if (userExists) {
                    response
                      .status(400)
                      .redirect('/warning/erroEmailExistente');
                  } else {
                    next();
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};
