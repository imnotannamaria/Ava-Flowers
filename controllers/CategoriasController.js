const{Categoria, sequelize} = require('../models');

const CategoriaController = {
    index: async (req,res) => {
        let categoria = await Categoria.findAll();
        return res.json(categoria);
    },
    todasFlores: (request, response) => { 
        return response.render('todasFlores')
    },
    buques: (request, response) => { 
        return response.render('buques')
    },
    ocasioes: (request, response) => { 
        return response.render('ocasioes')
    },
    create: async(req,res) => {
        let{nome} = req.body;
        
        let novaCategoria = await Categoria.create ({
            nome,
        });
        return res.json(novaCategoria);
    },

    update: async (req,res) => {
        const {id} = req.params;
        const {nome} = req.body;

        const categoria = await Categoria.update(
            {
                nome,
            },
            {
                where:{id}
            }
        );
        return res.json(categoria);
    },

    delete: async(req,res)=> {
        const{id} = req.params;

        const categoria = await Categoria.destroy({
            where: {id},
        });
        return res.json(categoria)
    },
};

module.exports = CategoriaController;