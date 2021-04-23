module.exports = (sequelize, DataTypes) => {
    // define(nomeModel, colunas, config)
    const Endereco = sequelize.define(
        'Endereco',
        {
            logradouro: DataTypes.STRING,
            cidade: DataTypes.STRING,
            estado: DataTypes.STRING,
            barirro: DataTypes.STRING,
            numero: DataTypes.STRING,
            complemento: DataTypes.STRING
        },
        {
            tableName: 'endereco',
            timestamps: false
        }
    );

    Endereco.associate = (models) => {
        Endereco.belongsToMany(models.Cliente, {
            as: 'cadastrado', // alias da relação
            through: 'clientes', // tabela intermediária
            foreignKey: 'endereco_id',
            otherKey: 'cliente_id',
            timestamps: false
        });

    }

    return Endereco;
};
