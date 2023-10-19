require('mysql')
const { queryDB } = require('./db_connection')
const SQL = {
    INSERT : 'INSERT INTO config  VALUES (?, ?)',
    DELETE : `DELETE FROM config WHERE id = ?`,
    SELECT : `SELECT * FROM config WHERE id = ?`,
    SELECT_ALL : `SELECT * FROM config`
}

async function select(id) {
    try {
        const result = await queryDB(SQL.SELECT, [id]);
        return result[0]
    } catch (error) {
        return null;
    }
}

async function selectAll() {
    try {
        return await queryDB(SQL.SELECT_ALL);
    } catch (error) {
        return null;
    }
}

async function deleteConfig(id) {
    try {
        await queryDB(SQL.DELETE, [id])
        return true;
    } catch (e) {
        return false;
    }
}

async function insert(config) {
    var res = true;
    try {
        await queryDB(SQL.INSERT, [config.id, config.data])
    } catch (e) {
        res = false;
    }
    return res;
}

module.exports = {
    insert,
    select,
    selectAll,
    deleteConfig, 
}