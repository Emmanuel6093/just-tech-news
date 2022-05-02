// import the sequelize constructor from the library 
const Sequelize = require('Sequelize'); 

// import env variables
require('dotenv').config(); 

// create connection to our database, pass in your mysql info for username and password
const sequelize = new Sequelize('just_tech_news_db', 'root', 'Lorenzo$6093', {

    host: 'localhost', 
    dialect: 'mysql', 
    port: 3306
});

module.exports = sequelize; 