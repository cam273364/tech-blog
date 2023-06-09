const User = require('./user')
const Post = require('./post')
const Comment = require('./comment')

User.hasMany(Post, {
    foreignKey: "userid"
})

Post.belongsTo(User, {
    foreignKey: "userid"
})

Comment.belongsTo(User, {
    foreignKey: "userid"
})

Post.hasMany(Comment, {
    foreignKey: "postid"
})

module.exports = { User, Post, Comment }