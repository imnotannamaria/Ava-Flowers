module.exports = (sequelize, DataTypes) => {
  // define(nomeModel, colunas, config)
  const Endereco = sequelize.define(
    'Endereco',
    {
      logradouro: DataTypes.STRING,
      cidade: DataTypes.STRING,
      estado: DataTypes.STRING,
      bairro: DataTypes.STRING,
      numero: DataTypes.STRING,
      complemento: DataTypes.STRING,
    },
    {
      tableName: 'enderecos',
      timestamps: false,
    }
  );

  return Endereco;
};
