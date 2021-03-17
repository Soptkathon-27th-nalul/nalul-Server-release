module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {

        UserIdx: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        uuid: {
            type: DataTypes.STRING(200),
            unique: true,
            allowNull: true,
        },
        agreement: {
            type: DataTypes.BOOLEAN,
            unique: false,
            allowNull: true,
            defaultValue: false
        },
        refreshToken: {
            type: DataTypes.STRING(100),
            unique: true,
            allowNull: true,
        }

    }, {
        //모델의 옵션들을 지정하는곳   
        tableName: 'USER_TB',
        timestamps: true,

    });
};