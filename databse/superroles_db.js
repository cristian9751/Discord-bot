require('mysql')
const { queryDB } = require("./db_connection")
const SQL = {
    INSERT : `INSERT INTO super_rols VALUES (?)`,
    DELETE : `DELETE FROM super_rols WHERE roleId = ?`,
    SELECT : `SELECT * FROM super_rols WHERE roleId = ?`,
    SELECT_ALL : `SELECT * FROM super_rols`
}


async function select(id) {
    try {
        const result = await queryDB(SQL.INSERT, [id]);
        return result[0];
    } catch (error) {
        return null;
    }
}

async function selectAll() {
    try {
        const r = await queryDB(SQL.SELECT_ALL);
        return r;
    } catch (error) {
        return null;
    }
}

async function deletesuperRoles(id) {
    try {
        await queryDB(SQL.DELETE, [id])
        return true;
    } catch (e) {
        return false;
    }
}

module.exports = { select , selectAll, deletesuperRoles};