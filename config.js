// to understand how to use app id and image keys, follow https://github.com/slowwdev/Discord-Selfbot-RPC/wiki/Installation

module.exports = {
    // spotify/game/twitch
    "mode": "spotify", 
    // dnd/online/idle
    "status": "dnd",

    "game": {
        "applicationID": "",

        "name": "", // title
        "details": "", // first row below title
        "state": "", // row below first row

        "largeImageKey": "", // Large Image
        "largeImageText": "", // the text when img surrounded (default is largeimage name in dev portal)

        "smallImageKey": "", // Small Image
        "smallImageText": "",
        
        // Date.now() Epoch timestamps
        "startTimestamp": "", // time elapsed since this timestamp (increase ++)
        "endTimestamp": "" // time left since this timestamp (decrease --)
    },
    "twitch": {
        "applicationID": "",
        "url": "", // twitch channel link

        "details": "", // title
        "state": "", // first row below title (playing ...)

        "largeImageKey": "", // in dev portal, upload img then name it with the name you want to appear with image is surrounded
        "largeImageText": "", // use this to replace text when img surrounded it will also be second row below title, if you dont want the row dont use it and setup text via dev portal (img name)
        
        "smallImageKey": "",
        "smallImageText": "",

        "startTimestamp": "",
        "endTimestamp": ""
    },
    "spotify": {
        "name": "", // for exemple listening to {name} instead of listening to spotify
        "details": "instagram.com/ibrahim.igdr", // title
        "state": "opium iboi", // row below title

        "largeImageKey": "spotify:ab67706c0000bebb1f2dfbb414734677b8aafe65", // https://github.com/mewzax/Discord-RPC-Selfbot/wiki/Spotify-API
        "largeImageText": "I AM MUSIC", // will also be second row below title
        
        "smallImageKey": "spotify:ab67706c0000bebb7dad286467ba6ec728b1c1e0",
        "smallImageText": "Nike",
    }
}
