const {Produto} = require ('../models');

module.exports = async (request,response,next) => {
    let { tipo, tipoFlor, valor, quantidade} = request.body;

    let user = await Produto.findAll({where: {tipo, tipoFlor, valor, quantidade}});

    if (!tipo || !tipoFlor || !valor || !quantidade){
        response
        .status(400)
        .json({ error: 'todos os campos são obrigatórios'});
        return;
    } else{
        next();
    }
};