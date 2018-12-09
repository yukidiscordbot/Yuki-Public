// at the top of your file
const Discord = require('discord.js');

const util = require("util");

module.exports = class {
    constructor() {
        this.help = {
            category: ":warning: Tulajdonos számára:",
            description: "Bekapcsolja a karbantartó módot."
        };
    }

    run(bot, message, args) {
const exampleEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle('Some title')
    .setURL('https://discord.js.org/')
    .setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
    .setDescription('Some description here')
    .setThumbnail('https://i.imgur.com/wSTFkRM.png')
    .addField('Regular field title', 'Some value here')
    .addBlankField()
    .addField('Inline field title', 'Some value here', true)
    .addField('Inline field title', 'Some value here', true)
    .addField('Inline field title', 'Some value here', true)
    .setImage('https://i.imgur.com/wSTFkRM.png')
    .setTimestamp()
    .setFooter("© Yuki V4.2.7 | Testing as well!", "https://data.whicdn.com/images/307645312/large.jpg?t=1519144430");

 message.channel.send(exampleEmbed);
    }
}