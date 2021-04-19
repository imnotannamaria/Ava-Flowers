module.exports = (sequelize, DataTypes) => {
  // define(nomeModel, colunas, config)
  const Cliente = sequelize.define(
    'Cliente',
    {
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
      senha: DataTypes.STRING,
      endereco_id: DataTypes.INTEGER,
    },
    {
      tableName: 'clientes',
      timestamps: false,
    }
  );

  return Cliente;
};
