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
