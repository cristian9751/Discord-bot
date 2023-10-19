const music_db = require('../databse/musroles_db')
const super_roles = require("../databse/superroles_db");

async function checkPermissions(interaction, permission) {
    let res = false;
    const query = {
        music : await music_db.selectAll(),
        super_roles : await super_roles.selectAll()
    }
    const response = query[permission];
    if(response) {
        for(let i = 0; i<response.length; i++) {
            const objeto = response[i];
            for(const role of interaction.member.roles.cache.values()) {
                if(objeto.roleId === role.id) {
                    res = true;
                }
            }
            if(res) break;
        }
    }
    if(!res && permission !== "super_roles") {
        return await checkPermissions(interaction, "super_roles")
    }
    return res;
}

module.exports = {
    checkPermissions
}