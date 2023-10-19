const { Events } = require('discord.js');

module.exports = {
    name: Events.ClientReady,
    once: true,
    async execute(c) {
        console.log("El bot se inicio correctamente  " + c.user.tag);
    },
};
