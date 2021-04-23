module.exports = (sequelize, DataTypes) => {
  // define(nomeModel, colunas, config)
  const Pedido = sequelize.define(
    'Pedido',
    {
      venda_id: DataTypes.INTEGER,
      quantidadePedido: DataTypes.INTEGER,
      produtos_id: DataTypes.INTEGER,
    },
    {
      tableName: 'pedido',
      timestamps: false,
    }
  );

  Pedido.associate = (models) => {
    Pedido.hasMany(models.Produto, {
      as: 'produtos',
      foreignKey: 'id',
    });

    Pedido.belongsTo(models.Venda, {
      as: 'Venda_pedido', // alias da relação
      foreignKey: 'venda_id',
      timestamps: false,
    });
  };

  return Pedido;
    // define(nomeModel, colunas, config)
   // const Pedido = sequelize.define('Pedido', {
        // venda_id: DataTypes.INTEGER,
       //  quantidadePedido: DataTypes.INTEGER,
       //  produtos_id: DataTypes.INTEGER,
    // },
    // {
      //  tableName: 'pedido',
      //   timestamps: false,
    // }
   //  );

   //  return Pedido;

};
