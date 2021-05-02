module.exports = (sequelize, DataTypes) => {
  // define(nomeModel, colunas, config)
  const Cliente = sequelize.define(
    'Cliente',
    {
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
      senha: DataTypes.STRING,
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
