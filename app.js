
const express = require('express')


const { engine } = require('express-handlebars')
const { renderHomePage, renderDashBoard } = require('./controllers/homepage');
const { renderSignupPage, registerUser, loginUser, renderLoginPage, logoutUser } = require('./controllers/user');
const session = require('express-session');
const { renderCreatePostPage, createPost, viewPost, commentOnPost } = require('./controllers/post');
const sequelize = require('./config');
const SequelizeStore = require('connect-session-sequelize')(session.Store)

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(session({
    secret: 'whatever you want',
    store: new SequelizeStore({db: sequelize})
}))

app.get('/', renderHomePage);

app.get('/signup', renderSignupPage)

app.post('/signup', registerUser)

app.get('/login', renderLoginPage)

app.post('/login', loginUser)

app.get('/createpost', renderCreatePostPage)

app.post('/createpost', createPost)

app.get('/viewpost/:id', viewPost)

app.post('/posts/:id/comment', commentOnPost)

app.get('/logout', logoutUser)

app.get('/home', (req, res) => {
    res.send('test')
})

app.get('/signin', (req, res) => {
    res.send('signintest')
})

app.get('/dashboard', renderDashBoard)




sequelize.sync({force: false}).then(() => {
    app.listen(process.env.PORT || 3000, function(err){
        if (err) console.log('error in server setup')
        console.log('app listening')
    });
})