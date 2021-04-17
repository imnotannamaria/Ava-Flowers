//Middlewares = camada de proteção antes de chamar o controller
const { Cliente } = require('../models');

module.exports = async(request, response, next) => {
    let { nome, email, senha } = request.body;

    let user = await Cliente.findAll({where: { nome, email, senha }});

    //se achar um usuário o array retornou 1 ou mais
    if(user.length){
        response.status(400).json({ error: "Email já cadastrado :(" });
        return;
    }else{
        if(!email){
            response.status(400).json({error: "Por favor informe o seu email :("});
        }else{
            if(!senha){
                response.status(400).json({error: "Por favor informe a sua senha :("});
            }else{
                if(!nome){
                    response.status(400).json({error: "Por favor informe a seu nome :("});
                }else {
                    if(senha.length < 6 || senha.length > 12){
                        response.status(400).json({error: "Senha inválida, sua senha deve ter de 6 a 12 digitos."});
                    }else{
                        next();
                    }
                }
                
            }
        }
    }

}