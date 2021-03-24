module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Question', {
        QuestionIdx: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        text: {
            type: DataTypes.STRING(200),
            unique: false,
            allowNull: true,
            defaultValue: ''
        },
        
        
    }, {
        tableName: 'QUESTION_TB',
        timestamps: true,
    });
};