const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config')

class Comment extends Model {

}

Comment.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userid: {
        type: DataTypes.INTEGER,
        references: { model: 'users', key: 'id' }
    }, 
    postid: {
        type: DataTypes.INTEGER,
        references: { model: 'posts', key: 'id' }
    }, 
}, {
    sequelize,
    modelName: "comment"
})

module.exports = Comment