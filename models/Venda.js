module.exports = (sequelize, DataTypes) => {
  // define(nomeModel, colunas, config)
  const Venda = sequelize.define(
    'Venda',
    {
      valorTotal: DataTypes.DOUBLE,
      data: DataTypes.DATE,
      clientes_id: DataTypes.INTEGER,
      pagamentos_id: DataTypes.INTEGER,
      status_id: DataTypes.INTEGER,
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
      timestamps: false,
    });

    Venda.belongsTo(models.Pagamento, {
      as: 'formaPagamentoUsada', // alias da relação
      foreignKey: 'pagamentos_id',
      timestamps: false,
    });

    Venda.belongsTo(models.Status, {
      as: 'statusVenda', // alias da relação
      foreignKey: 'status_id',
      timestamps: false,
    });

    Venda.hasMany(models.Pedido, {
      as: 'produtosVendidos', // alias da relação
      foreignKey: 'id',
      timestamps: false,
    });

    Venda.hasMany(models.Pedido, {
      as: 'Pedidos_vendas', // alias da relação
      foreignKey: 'id',
      timestamps: false,
    });
  };

  return Venda;
};
