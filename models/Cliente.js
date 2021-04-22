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
    Cliente.hasMany(models.Endereco, {
      as: 'enderecos',
      foreignKey: 'id',
    });
  };

  return Cliente;
};
