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
    searchResults: 3,
    searchSongs: 0,
    nfsw: false,
    joinNewVoiceChannel: true,
    directLink: false,
    youtubeDL: false,
    ytld : {
        highWaterMark: 1024*1024*64,
        quality : "highestaudio",
        format : "audioonly",
        liveBuffer : 60000,
        dlChunkSize: 1024*1024*4,
    },
    plugins : [
        new SpotifyPlugin({
            parallel : true,
            emitEventsAfterFetching: true
        }),
        new SoundCloudPlugin()
    ]
}



module.exports = {distube_config}