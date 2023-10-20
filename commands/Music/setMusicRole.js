const { SlashCommandBuilder } = require('discord.js');
const {insert, select, selectAll } = require('../../databse/musroles_db.js')
const { checkPermissions } = require('../../Controller/Permissions')
const { discordRoleExists } = require('../../Controller/Roles.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('allowmusic')
        .setDescription("Pudes asignar permisos para ejecutar el bot de musica a cierto rol")
        .addStringOption(option => option.setName('rolid').setDescription('Id del rol al que quieres asignar el permiso').setRequired(true)),
    async execute(interaction) {
        await interaction.deferReply({content : "Los minions estan trabajando en ello... ", ephemeral : true});
        let rolid;
        try {
            rolid = parseInt(interaction.options.getString('rolid'));
        } catch (e) {
            return interaction.editReply({content : "Debes introducir una secuencia de numeros como id del permiso", ephemeral : true})
        }
        const role = await discordRoleExists(interaction, rolid);
        if (!role) {
            return interaction.editReply({
                content: "El rol al que intentas asignar el permiso no existe",
                ephemeral: true
            })
        }
        const alreadyHasPermission = await select(role.id);
        console.log(alreadyHasPermission)
        if(alreadyHasPermission !== null && alreadyHasPermission.length > 0) {
            return interaction.editReply({content : `El rol ${role.name} ya tiene permisos de musica`, ephemeral : true})
        }

        const issuerHasPermissions = await checkPermissions(interaction, "super_roles")
        if(issuerHasPermissions) {
            const inserted = await insert(role.id);
            console.log("Inserted" + inserted)
            if(inserted) {
                return interaction.editReply({content : `Se ha asignado el permiso de musica al rol ${role.name}`,
                    ephemeral : true})
            } else {
                return interaction.editReply({content: `Ha ocurrido un error al asignar el permiso de muscia al rol 
                ${role.name}`, ephemeral : true})
            }
        } else {
            return interaction.editReply({content : "No tienes permisos para hacer uso de este comando", ephemeral : true})
        }

    }
};