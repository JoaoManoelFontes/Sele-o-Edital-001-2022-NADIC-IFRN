require('dotenv').config();

module.exports = {
    dialect: process.env.DIALECT,
    host: process.env.HOST,
    username: process.env.ROOT,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,  
    define: {    
        timeStamps:true,
        underscored:true
        },
}
