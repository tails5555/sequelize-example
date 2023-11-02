const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define(
        "TestData",
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            title: {
                type: DataTypes.STRING(50),
                allowNull: false
            },
            description: {
                type: DataTypes.STRING(200)
            },
            numeric: {
                type: DataTypes.DECIMAL(9, 2)
            },
            dtime: {
                type: DataTypes.DATE,
                allowNull: false
            }
        }, {
            modelName: 'TestData',
            tableName: 'testdata',
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
            timestamps: false, // 자동으로 Auditing Data 생성을 막는다.
            sequelize,
        }
    );
};