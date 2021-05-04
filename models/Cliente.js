module.exports = (sequelize, DataTypes) => {
  // define(nomeModel, colunas, config)
  const Cliente = sequelize.define(
    'Cliente',
    {
      email: DataTypes.STRING,
      senha: DataTypes.STRING,
      nome: DataTypes.STRING,
      logradouro: DataTypes.STRING,
      cidade: DataTypes.STRING,
      estado: DataTypes.STRING,
      bairro: DataTypes.STRING,
      numero: DataTypes.STRING,
      complemento: DataTypes.STRING,
    },
    {
      tableName: 'clientes',
      timestamps: false,
    }
  );

  return Cliente;
};
