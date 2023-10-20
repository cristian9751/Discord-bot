const {SlashCommandBuilder} = require("discord.js");
const {discordRoleExists} = require("../../Controller/Roles");
const {select, deletemusroles} = require("../../databse/musroles_db");
const {checkPermissions} = require("../../Controller/Permissions");
module.exports = {
    data : new SlashCommandBuilder()
        .setName('play')
        .setDescription("Reproduce musica")
        .addStringOption(option => option.setName('busqueda').setDescription('Lo que quieres reproducir')),
    async  execute(interaction) {
        const search = interaction.options.getString("busqueda");
        if(!interaction.member.voice?.channel) return interaction.reply({
            content : "Debes estar conectado a un canal de voz para poder ejeutar este comando",
            ephemeral : true
        })
        await interaction.deferReply({ephemeral : false})

        const hasPermission = await checkPermissions(interaction, "music")
        if(!hasPermission) return interaction.editReply({
            content : "No tienes permisos para ejecutar este comando",
            ephemeral : true
        })

        interaction.client.distube.play(interaction.member.voice.channel, search)
        return interaction.editReply("Buscando " + search)


    }
}