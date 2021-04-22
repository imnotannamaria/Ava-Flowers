module.exports = ( Sequelize, DataTypes) => {
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
  





return Status;
};