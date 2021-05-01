//Middlewares = camada de proteção antes de chamar o controller
const { Cliente } = require('../models');

module.exports = async (request, response, next) => {
  let {
    nome,
    email,
    senha,
    logradouro,
    cidade,
    estado,
    bairro,
    numero,
    complemento,
  } = request.body;

  let user = await Cliente.findAll({
    where: {
      nome,
      email,
      senha,
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
    response.status(400).json({ error: 'Email já cadastrado :(' });
    return;
  } else {
    if (!email) {
      response.status(400).json({ error: 'Por favor informe o seu email :(' });
    } else {
      if (!senha) {
        response
          .status(400)
          .json({ error: 'Por favor informe a sua senha :(' });
      } else {
        if (!nome) {
          response
            .status(400)
            .json({ error: 'Por favor informe a seu nome :(' });
        } else {
          if (senha.length < 6 || senha.length > 12) {
            response.status(400).json({
              error: 'Senha inválida, sua senha deve ter de 6 a 12 digitos.',
            });
          } else {
            if (!logradouro || !cidade || !estado || !bairro || !numero) {
              response
                .status(400)
                .json({
                  error: 'Todos os campos obrigatórios devem ser preenchidos',
                });
              return;
            } else {
              if (logradouro.length < 5) {
                response
                  .status(400)
                  .json({ error: 'Inisira um logradouro válido' });
                return;
              } else {
                next();
              }
            }
          }
        }
      }
    }
  }
};
