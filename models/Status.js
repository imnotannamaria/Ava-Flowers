module.exports = (Sequelize, DataTypes) => {
    const Status = Sequelize.define(
        'Status',

        {
            nome: DataTypes.STRING,

        },
        {
            tableName: 'status',
            timestamps: false,
        }
    );

    Status.associate = (models) => {

        Status.hasMany(models.Venda, {
            as: 'vendasComStatus',
            foreignKey: 'id'
        });

    };

    return Status;

};