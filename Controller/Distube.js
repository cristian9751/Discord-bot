const SpotifyPlugin = require("@distube/spotify");
const SoundCloudPlugin = require("@distube/soundcloud");
const DisTube = require("distube");
const distube_config = {
    emitNewSongOnly: false,
    emptyCooldown: 20,
    leaveOnEmpty: true,
    leaveOnFinish: false,
    leaveOnStop: true,
    savePreviousSongs: true,
    searchSongs: 0,
    joinNewVoiceChannel: true,
    directLink: false,
}



module.exports = {distube_config}