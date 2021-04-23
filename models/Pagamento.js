module.exports = (Sequelize, DataTypes) => {
    const Pagamento = Sequelize.define(
        'Pagamento',

        {
        nome: DataTypes.STRING,
        },
        {
        tableName: 'pagamentos',
        timestamps: false,
        }
    );

  //lincar as chaves

    Pagamento.associate = (models) => {
        Pagamento.hasMany(models.Venda, {
        as: 'vendasPagasCom',
        foreignKey: 'id',
        });
    };

    return Pagamento;
};
