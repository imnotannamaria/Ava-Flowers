module.exports = ( Sequelize, DataTypes) => {
    const Produto = Sequelize.define(
            'Produto', 
            {
                tipo: DataTypes.STRING,
                tipoFlor: DataTypes.STRING,
                valor: DataTypes.FLOAT,
                quantidade: DataTypes.INTEGER,
            },
            {
                tableName: 'produtos',
                timestamps: false,
            }
    );
    return Produto;
};