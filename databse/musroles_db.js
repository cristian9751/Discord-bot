require('mysql')
const { queryDB } = require("./db_connection")
const SQL = {
    INSERT : `INSERT INTO mus_rols VALUES (?)`,
    DELETE : `DELETE FROM mus_rols WHERE roleId = ?`,
    SELECT : `SELECT * FROM mus_rols WHERE roleId = ?`,
    SELECT_ALL : `SELECT * FROM mus_rols`
}


async function select(id) {
    try {
        return await queryDB(SQL.SELECT, [id]);
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

async function deletemusroles(id) {
    try {
        await queryDB(SQL.DELETE, [id])
        return true;
    } catch (e) {
        return false;
    }
}

async function insert(roleId) {
    var res  = true;
    try {
        await queryDB(SQL.INSERT, [roleId])
    } catch (e) {
        res = false;
    }
    return res;
}

module.exports = { select , selectAll, deletemusroles, insert};