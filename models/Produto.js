module.exports = (Sequelize, DataTypes) => {
  const Produto = Sequelize.define(
    'Produto',
    {
      nome: DataTypes.STRING,
      valor: DataTypes.FLOAT,
      quantidadeEstoque: DataTypes.INTEGER,
      categoria_id: DataTypes.INTEGER,
      descricao: DataTypes.STRING,
    },
    {
      tableName: 'produtos',
      timestamps: false,
    }
  );

  //lincar as chaves
  Produto.associate = (models) => {
    Produto.belongsToMany(models.Categoria, {
      as: 'disponivel', // alias da relação
      through: 'categoria', // tabela intermediária
      foreignKey: 'categoria_id',
      otherKey: 'produtos_id',
      timestamps: false,
    });

    Produto.belongsTo(models.Pedido, {
      as: 'pedido_produto', // alias da relação
      foreignKey: 'id',
      timestamps: false,
    });
  };

  return Produto;
};
