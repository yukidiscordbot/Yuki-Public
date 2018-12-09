const Discord = require("discord.js");
const botconfig = require("../config.json");

module.exports = class {
    constructor() {
        this.help = {
            category: ":checkered_flag: Speciális",
            description: "Egy felhasználónak beállítja hogy ne zavarják!"
        };
    }

    async run (bot, message, args) {

    let prefix = botconfig.prefix;
    if (!message.content.startsWith(prefix)) return;
    let botembed = new Discord.RichEmbed()
        .addField("My bot invite is", `[Click Here](https://discordapp.com/oauth2/authorize?client_id=489219428358160385&permissions=201780305&redirect_uri=https%3A%2F%2Fdinohost4.webnode.hu%2Fparancs&scope=bot)`)
        .addField("Without permissions", `[Click Here](https://discordapp.com/api/oauth2/authorize?client_id=489219428358160385&permissions=26688&redirect_uri=https%3A%2F%2Fdinohost4.webnode.hu%2Fparancs&scope=bot)`)
        .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL)
        .setTimestamp()
        .setColor('RANDOM');

    message.channel.send(botembed);
}

}