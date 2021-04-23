const{Venda, sequelize} = require('../models');


const VendasController = {
    index: async (req,res) => {
        let vendas = await Venda.findAll();
        return res.json(vendas);
    },

    create: async(req,res)=>{
        let { valorTotal, data, pagamentos_id, status_id, clientes_id } = req.body;
        

        let novaVenda = await Venda.create({
            valorTotal,
            data,
            pagamentos_id,
            status_id,
            clientes_id
        });
        return res.json(novaVenda);
    },

    update: async (req,res) =>{

        const {id} = req.params;
  
        const { valorTotal, data, pagamentos_id, status_id, clientes_id } = req.body;
  
       
  
        const Venda = await Venda.update(
  
            {
                valorTotal,
                data,
                pagamentos_id,
                status_id,
                clientes_id
            },
  
            {
                where:{id},
            }
  
        );
  
         return res.json(Venda);
  
    },
  
    delete: async (req,res) => {
        const{id} = req.params;

        const Venda = await Venda.destroy({
            where: {id},
        });
        return res.json(Venda);
    },
  

};
module.exports = VendasController;

