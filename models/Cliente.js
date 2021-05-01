module.exports = (sequelize, DataTypes) => {
  // define(nomeModel, colunas, config)
  const Cliente = sequelize.define(
    'Cliente',
    {
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
      senha: DataTypes.STRING,
    },
    {
      tableName: 'clientes',
      timestamps: false,
    }
  );

  Cliente.associate = (models) => {
    Cliente.belongsTo(models.Endereco, {
      as: 'cadastrado', // alias da relação
      through: 'enderecos', // tabela intermediária
      foreignKey: 'id',
      timestamps: false,
    });
  };

  return Cliente;
};
