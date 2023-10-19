const {SlashCommandBuilder} = require("discord.js");
const {discordRoleExists} = require("../../Controller/Roles");
const {select, deletemusroles} = require("../../databse/musroles_db");
const {checkPermissions} = require("../../Controller/Permissions");
module.exports = {
    data : new SlashCommandBuilder()
        .setName('denymusic')
        .setDescription("Quita permisos de bot de musica a cierto rol")
        .addStringOption(option => option.setName('id').setDescription('Id del rol al que quieres')),
        async  execute(interaction) {
            await interaction.deferReply({ephemeral : true})
            let rolid;
            try {
                rolid = parseInt(interaction.options.getString('id'))
            } catch (e) {
                return interaction.editReply({content : "Debes introducir una secuencia de numeros como id de permiso",
                ephemeral : true})
            }

            const role = await discordRoleExists(interaction, rolid)
            if(!role) {
                return interaction.editReply({content : "El rol no existe", ephemeral : true})
            }

            const hasPermission = await select(role.id);
            if(!hasPermission)  return interaction.editReply({content : `El rol ${role.name} no tiene los permisos de musica por lo tanto no se los puedes quitar`, ephemeral : true})


            const issuerHasPermissions = await checkPermissions(interaction, "super_roles")
            if(!issuerHasPermissions)  return interaction.editReply({content : "No tienes permisos para ejecutar este comando", ephemeral : true})

            const deleted = await deletemusroles(role.id)
            console.log(deleted)
            if(!deleted) return interaction.editReply({content: "Ha ocurrido un error intentalo de nuevo mas tarde", ephemeral : true})
            return interaction.editReply(`Se ha eliminado el permiso de musica al rol ${role.name}`)
        }
}