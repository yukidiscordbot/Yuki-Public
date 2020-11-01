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
        .addField("Recommended Invite", `[Click Here](https://discordapp.com/oauth2/authorize?client_id=489219428358160385&permissions=1543859415&scope=bot)`)
        .addField("Permissionless Invite", `[Click Here](https://discordapp.com/api/oauth2/authorize?client_id=489219428358160385&scope=bot)`)
      .setColor(`#d91414`)
.setFooter(`© Yuki V5.3.1`, "https://cdn.discordapp.com/avatars/489219428358160385/19ad8d8c2fefd03fa0e1a2e49a2915c4.png")

    message.channel.send(botembed);
}

}