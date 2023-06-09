const { User } = require('../models')

function renderLoginPage(req, res) {
    res.render("login")
}
function renderSignupPage(req, res) {
    res.render('signup')
}

async function registerUser(req, res) {
    const newUser = await User.create(req.body)
    req.session.user = newUser.id
    req.session.save(() => {
        res.redirect('/')
    })
}

async function loginUser(req, res) {
    const matchingUser = await User.findOne({
        where: req.body
    })
    if(!matchingUser) {
       return res.sendStatus(403)
    }
    req.session.user = matchingUser.id
    req.session.save(() => {
        res.redirect('/')
    })
    
}

function logoutUser(req, res) {
    req.session.destroy(() => {
        res.redirect('/')
    })
    
    
}

module.exports = {
    renderSignupPage,
    registerUser,
    renderLoginPage,
    loginUser,
    logoutUser
}