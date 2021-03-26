const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./user')(sequelize, Sequelize);
db.Post = require('./post')(sequelize, Sequelize);
db.Question = require('./question')(sequelize, Sequelize);


/* 1: N User:Post */
db.User.hasMany(db.Post,{onDelete:'cascade',foreignKey: 'UserIdx',sourceKey:'UserIdx'}) 
db.Post.belongsTo(db.User,{foreignKey: 'UserIdx',targetKey:'UserIdx'});

/* 1: N Question:Post */
db.Question.hasMany(db.Post,{onDelete:'cascade',foreignKey: 'QuestionIdx',sourceKey:'QuestionIdx'})
db.Post.belongsTo(db.Question,{foreignKey: 'QuestionIdx',targetKey:'QuestionIdx'})

module.exports = db;
