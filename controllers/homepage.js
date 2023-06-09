const { Post, User } = require('../models')

async function renderHomePage(req, res) {
    const loggedIn = !!req.session.user
    //logic to get entries, use the post model in order to find all entries, after doing that, pass it in as another property under context object. similar to how we pulled , creat a chunk of html responsible for rendering a particular entry.
    const posts = await Post.findAll({
        include: [
            {
                model: User
            }
        ]
    })
    const postData = posts.map((post) => {
        return post.get({plain: true})
    })
    console.log(postData)
    res.render("index", {loggedIn, postData})
}
function renderDashBoard(req, res) {
    res.render('dashboard')
}


module.exports = {
    renderHomePage,
    renderDashBoard
}