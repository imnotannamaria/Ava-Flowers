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

    Pagamento.associate = (models) => {

        Pagamento.hasMany(models.Venda, {
            as: 'vendasPagasCom',
            foreignKey: 'id'
        });

    };



    return Pagamento;
};