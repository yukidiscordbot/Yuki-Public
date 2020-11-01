const Discord = require("discord.js");
const botconfig = require("../config.json");

module.exports = class {
    constructor() {
        this.help = {
            category: "Other",
            description: "Invite this bot!"
        };
    }

    async run (bot, message, args) {
    let botembed = new Discord.RichEmbed()
    .setTitle('Share this bot with your friends.')
    .setDescription('You can invite this bot for the following links below or you can join to my server too.')
        .addField("with Permissions", `[Click Here](https://discordapp.com/oauth2/authorize?client_id=489219428358160385&permissions=1543859415&scope=bot)`)
        .addField("without Permissions", `[Click Here](https://discordapp.com/api/oauth2/authorize?client_id=489219428358160385&scope=bot)`)
      .setColor(`#ffc0cb`)
     .setFooter(`© Yuki V5.2.0`, "https://cdn.discordapp.com/avatars/489219428358160385/c056d11e4e241630cd7b16aa262e48e0.png?size=2048")

    message.channel.send(botembed);
}

}