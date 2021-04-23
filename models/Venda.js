module.exports = (sequelize, DataTypes) => {
    // define(nomeModel, colunas, config)
    const Venda = sequelize.define('Venda', {
        valorTotal: DataTypes.DOUBLE,
        data: DataTypes.DATE,
        clientes_id: DataTypes.INTEGER,
        pagamentos_id: DataTypes.INTEGER,
        status_id: DataTypes.INTEGER,
    },
    {
        tableName: 'venda',
        timestamps: false,
    }
    );

    return Venda;
};
