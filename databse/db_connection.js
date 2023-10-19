const mysql = require('mysql');
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const db_config = {
    host     : process.env.MYSQL_HOST,
    user     : process.env.MYSQL_USERNAME,
    password : process.env.MYSQL_PASSWORD,
    database : process.env.MYSQL_DATABASE,
    ssl : true
}


async function doConnection() {
    const connection = mysql.createConnection(db_config);
    return new Promise((resolve, reject) => {
        connection.connect((error) => {
            if(error) {
                reject(error)
            } else {
                resolve(connection)
            }
        })
    })
}

async function queryDB(query, options) {
    const connection = await doConnection();
    return new Promise((resolve, reject) => {
        connection.query(query, options, (error, result) => {
            if(error) {
                reject(error);
            } else {
                resolve(result)
            }
            connection.end();
        })
    })
}



module.exports = {
    queryDB,
};