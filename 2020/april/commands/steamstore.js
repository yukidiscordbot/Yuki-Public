const Discord = require('discord.js')
var steam = require('steam-provider')
var provider = new steam.SteamProvider();
module.exports = class {
    constructor() {
        this.help = {
            category: "Information",
            usage: "<game>",
            description: "Shows the game informations when the game was released, and price."
        };
    }

    run(client, message, args) {
          let game = args[0]
    if (!game) return message.channel.send('<:error:543851339713609745> Please give an game to send their informations!')
    provider.search(game).then(result => {
    provider.detail(result[0].id, "english", "en").then(results => {
        console.log(results)
    const embed = new Discord.RichEmbed()
      .setColor(`#ffc0cb`)
    .setTitle(result[0].name)
    .addField(`ID`, result[0].id)
    .setThumbnail(results.otherData.imageUrl)
    .addField('Types', results.genres)
    .addField('Price', `**${results.priceData.finalPrice}**$`, true)
    .addField('Platform', results.otherData.platforms, true)
    .addField('Features', results.otherData.features, true)
    .addField('Developer(s)', results.otherData.developer, true)
    .addField('Publisher(s)', results.otherData.publisher, true)
    message.channel.send(embed).catch(e => {
        console.log(e)
        message.channel.send('<:error:543851339713609745> No any `' + game + '` was found!')
    })
})
})
}
}