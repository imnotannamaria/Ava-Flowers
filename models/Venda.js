module.exports = (Sequelize, DataTypes) => {
    const Venda = Sequelize.define(
        'Venda',

        {
            valorTotal: DataTypes.FLOAT,
            data: DataTypes.DATE,
            pagamentos_id: DataTypes.INTEGER,
            clientes_id: DataTypes.INTEGER,
            status_id: DataTypes.INTEGER
        },
        {
            tableName: 'venda',
            timestamps: false,
        }
    );

    Venda.associate = (models) => {
        Venda.belongsTo(models.Cliente, {
            as: 'vendidoPara', // alias da relação
            foreignKey: 'clientes_id',
            timestamps: false
        });

        Venda.belongsTo(models.Pagamento, {
            as: 'formaPagamentoUsada', // alias da relação
            foreignKey: 'pagamentos_id',
            timestamps: false
        });

        Venda.belongsTo(models.Status, {
            as: 'statusVenda', // alias da relação
            foreignKey: 'status_id',
            timestamps: false
        });

        // Venda.hasMany(models.Pedido, {
        //     as: 'produtosVendidos', // alias da relação
        //     foreignKey: 'id',
        //     timestamps: false
        // });

    }

    return Venda;

};