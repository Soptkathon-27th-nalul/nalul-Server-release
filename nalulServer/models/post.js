module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Post', {
        PostIdx: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        photo: {
            type: DataTypes.STRING(200),
            unique: false,
            allowNull: true,
            defaultValue: ''
        },
        text: {
            type: DataTypes.TEXT,
            unique: false,
            allowNull: true,
            defaultValue: ''
        },
        category: {
            type: DataTypes.INTEGER,
            unique: false,
            allowNull: true,
        },
        
    }, {
        tableName: 'POST_TB',
        timestamps: true,
    });
};