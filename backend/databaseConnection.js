const dotenv = require("dotenv");

dotenv.config()

const config = {
    user: process.env.user,
    password: process.env.password, 
    server: process.env.server,
    port: parseInt(process.env.port), 
    database: process.env.database, 
    authentication: {
        type: 'default'
    },
    options: {
        encrypt: true
    }
}

module.exports = config