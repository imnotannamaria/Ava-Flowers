module.exports = (sequelize, DataTypes) => {
    // define(nomeModel, colunas, config)
    const Pedido = sequelize.define('Pedido', {
        venda_id: DataTypes.INTEGER,
        quantidadePedido: DataTypes.INTEGER,
        produtos_id: DataTypes.INTEGER,
    },
    {
        tableName: 'pedido',
        timestamps: false,
    }
    );

    return Pedido;

};
