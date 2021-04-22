module.exports = ( Sequelize, DataTypes) => {
    const Pagamento = Sequelize.define(
            'Pagamento', 
            
            {
                nome: DataTypes.STRING,
                
            },
            {
                tableName: 'pagamentos',
                timestamps: false,
            }
    );
  

//lincar as chaves



return Pagamento;
};