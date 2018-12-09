const Discord = require("discord.js");
module.exports = class {
    constructor() {
        this.help = {
            category: "Category 1",
            description: "a"
        };
    }

    async run (bot, message, args) {
     let botembed = new Discord.RichEmbed()
     .setTitle("Help")   
     .addField("y!osu <playername>", `Shows a statistic of that osu player.`)
      .addField("y!gay", `Shows a user their gayness.`)
     .addField("y!hentaigif", `Shows a random hentai gif/images!`)
     .addField("y!hug @Mention", `Hugs a user.`)
     .addField("y!kiss @Mention", `Kiss a user.`)
      .addField("y!slap", `Slaps a user.`)
     .addField("y!lewd", `Shows a random lewd images!`)
     .addField("y!trap", `Traps a user.`)
     .addField("y!pat @Mention", `Pat a user.`)
     .addField("y!ban @Mention Reason", `Bans a user with reason.`)
     .addField("y!kick @Mention Reason", `Kicks a user with reason.`)
     .addField("y!mute @Mention Reason", `Mute a user with reason.`)
     .addField("y!neko", `Some cute images!`)
     .addField("y!nickname Name", `I change my name to that username!`)
     .addField("y!uptime", `Shows my time, i alive!`)
     .addField("y!mc Message | Message", `Generate an minecraft achivement!`)
     .addField("y!weather Location", `Shows the weather.`)
     .addField("y!meme", `Shows a random meme.`)
     .addField("y!animememes", `Shows a random anime meme.`)
     .addField("y!redditmemes", `Shows a random reddit meme.`)
     .addField("y!stats", `Statistics of me!`)
     .addField("y!avatar @Mention", `Shows that user avatar picture.`)
     .addField("y!rip @Mention", `Shows that user corpse.`)
     .addField("y!report @Mention | Reason", `Report a user with reason.`)
     .addField("y!google Search", `I will googling that.`)
     .setColor("BLUE")
     .setFooter("© Yuki V4.2.7", "https://cdn.discordapp.com/avatars/489219428358160385/0124852f9a510c76934d65f9495c07d5.png")

    message.channel.send(botembed)
}
}