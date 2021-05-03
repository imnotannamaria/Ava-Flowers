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
      clientes_id: DataTypes.INTEGER,
    },
    {
      tableName: 'endereco',
      timestamps: false,
    }
  );

  Endereco.associate = (models) => {
    Endereco.hasMany(models.Endereco, {
      as: 'clientes',
      foreignKey: 'clientes_id',
    });
  };

  return Endereco;
};
