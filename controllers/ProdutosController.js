const{Produto, sequelize} = require('../models');


const ProdutosController = {
    index: async (req,res) => {
        let produtos = await Produto.findAll();
        return res.json(produtos);
    },

    create: async(req,res)=>{
        let { nome,  valor, quantidadeEstoque,  categoria_id} = req.body;
        

        let  novoProduto = await Produto.create({
            nome,
            valor,
            quantidadeEstoque,
            categoria_id,
        });
        return res.json(novoProduto);
    },

    update: async (req,res) =>{

        const {id} = req.params;
  
        const {nome, valor,quantidadeEstoque, categoria_id} = req.body;
  
       
  
        const produto = await Produto.update(
  
            {
  
                nome,
    
                valor,
  
                quantidadeEstoque,

                categoria_id,
  
            },
  
            {
  
                where:{id},
  
            }
  
        );
  
         return res.json(produto);
  
    },
  
    delete: async (req,res) => {
        const{id} = req.params;

        const produto = await Produto.destroy({
            where: {id},
        });
        return res.json(produto);
    },
  

};
module.exports = ProdutosController;

const { Produto, sequelize } = require('../models/');

const produtosController = {
  index: async (req, res) => {
    let produtos = await Produto.findAll();
    return res.json(produtos);
  },

  create: async (req, res) => {
    let { tipo, tipoFlor, valor, quantidade } = req.body;

    let novoProduto = await Produto.create({
      tipo,
      tipoFlor,
      valor,
      quantidade,
    });

    return res.json(novoProduto);
  },

  update: async (req,res) =>{
      const {id} = req.params;
      const {tipo, tipoFlor, valor,quantidade} = req.body;
     
      const produto = await Produto.update(
          {
              tipo,
              tipoFlor,
              valor,
              quantidade,
          },
          {
              where:{id},
          }
      );

      return res.json(produto);
  },
  delete: async (req,res) => {
      const {id} = req.params;

      const produto = await Produto.destroy({
          where: {id},
      });

      return res.json(produto);
  },
};

module.exports = produtosController;