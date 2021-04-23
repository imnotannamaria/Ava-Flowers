module.exports = ( Sequelize, DataTypes) => {
    const Categoria = Sequelize.define(
            'Categoria', 
            
            {
                nome: DataTypes.STRING,
                
            },
            {
                tableName: 'categoria',
                timestamps: false,
            }
    );

//lincar as chaves

 // relação 1:N (um categoria para varios produtos)
Categoria.associate = (models) => {
    Categoria.hasMany(models.Produto , {
        as: 'produtos',
        foreignKey: 'categoria_id',
    });
}

return Categoria;
};
