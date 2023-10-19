const { SlashCommandBuilder } = require('discord.js');
const { checkPermissions } = require('../../Controller/Permissions')
const {queryDB} = require("../../databse/db_connection");
module.exports = {
    data: new SlashCommandBuilder()
        .setName('hola')
        .setDescription("Hola commando"),
    async execute(interaction) {
        await interaction.deferReply({content : "Los minions estan trabajando en ello... ", ephemeral : true});
        const hasPermission = await checkPermissions(interaction, "music")
        return interaction.editReply("Hola que tal")
    }
};