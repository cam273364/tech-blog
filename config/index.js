require("dotenv").config()
const Sequelize = require('sequelize')

const{ DB_NAME1, DB_USER, DB_PASSWORD, JAWSDB_URL } = process.env
let sequelize
if(JAWSDB_URL) {
    sequelize = new Sequelize(JAWSDB_URL)
} else {
     sequelize = new Sequelize(DB_NAME1, DB_USER, DB_PASSWORD, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    })
}


module.exports = sequelize