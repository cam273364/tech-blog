const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config')

class Post extends Model {

}

Post.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userid: {
        type: DataTypes.INTEGER,
        references: { model: 'user', key: 'id' }
    }
}, {
    sequelize,
    modelName: "post"
})

module.exports = Post