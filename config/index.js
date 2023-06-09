require("dotenv").config()
const Sequelize = require('sequelize')

const{ DB_NAME1, DB_USER, DB_PASSWORD } = process.env
console.log(process.env.ABC)
const sequelize = new Sequelize(DB_NAME1, DB_USER, DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})

module.exports = sequelize