async function discordRoleExists(interaction, searchId) {
    for(const discordRole of interaction.guild.roles.cache.values()) {
       if(discordRole.id == searchId) {
           return discordRole;
       }

    }
    return false;
}

module.exports = {
    discordRoleExists
}