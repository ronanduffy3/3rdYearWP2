// Configuration file to direct to dotenv config values check .env to see

require('dotenv').config();

module.exports = {
    DB: process.env.APP_DB,
    PORT: process.env.APP_PORT,
    SECRET: process.env.APP_SECRET
}