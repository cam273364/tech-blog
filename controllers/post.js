const { Post, User, Comment } = require('../models')

function renderCreatePostPage(req, res) {
    res.render('createpost')
}

async function createPost(req, res) {
    if (!req.session.user) {
        return res.sendStatus(403)
    }
    const newPost = await Post.create({...req.body, userid: req.session.user})
    res.redirect('/')
}

async function viewPost(req, res) {
    const matchingPost = await Post.findByPk(req.params.id, {
        include: [
            {
                model: User
            }
        ]
    })
    res.render("viewpost", {
        post: matchingPost?.get({plain: true})
    })
}

async function commentOnPost(req, res) {
    const findPost = await Post.findByPk(req.params.id)
    if(!findPost) {
        return res.sendStatus(404)
    }
    const newComment = await Comment.create({...req.body, userid: req.session.user, postid: req.params.id})
    res.redirect(`/viewpost/${req.params.id}`)
}

module.exports = {
    renderCreatePostPage,
    createPost,
    viewPost,
    commentOnPost
}