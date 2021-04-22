module.exports = ( Sequelize, DataTypes) => {
    const Produto = Sequelize.define(
            'Produto', 
            {
                nome: DataTypes.STRING,
                valor: DataTypes.FLOAT,
                quantidadeEstoque: DataTypes.INTEGER,
                categoria_id: DataTypes.INTEGER,
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

 }
return Produto;

};

module.exports = (sequelize, Datatypes) => {
  const Produto = sequelize.define(
    'Produto',
    {
      tipo: Datatypes.STRING,
      tipoFlor: Datatypes.STRING,
      valor: Datatypes.FLOAT,
      quantidade: Datatypes.INTEGER,
    },
    {
      tableName: 'produtos',
      timestamps: false,
    }
  );
  return Produto;
};

