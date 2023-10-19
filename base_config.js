require('dotenv').config();

const base_config = {
    "token" : process.env.TOKEN,
    "client_id" : process.env.APLICATION_ID
}



module.exports = {
    base_config
};