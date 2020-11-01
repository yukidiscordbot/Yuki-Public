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
    .addField(`Game ID`, result[0].id)
    .setThumbnail(results.otherData.imageUrl)
    .addField('Types', results.genres)
    .addField('Game Price', `**${results.priceData.finalPrice}**$`, true)
    .addField('Platform', results.otherData.platforms, true)
    .addField('Metacritic Score', results.otherData.metacriticScore, true)
    .addField('Features', results.otherData.features, true)
    .addField('Developer(s)', results.otherData.developer, true)
    .addField('Published by', results.otherData.publisher)
  .setColor("#36393F")
         .setFooter(`© Yuki V5.2.0`, "https://cdn.discordapp.com/avatars/489219428358160385/c056d11e4e241630cd7b16aa262e48e0.png?size=2048")
    message.channel.send(embed).catch(e => {
        console.log(e)
        message.channel.send('<:error:543851339713609745> No any `' + game + '` was found!')
    })
})
})
}
}