const Discord = require('discord.js');
module.exports = class {
    constructor() {
        this.help = {
            category: "Other",
            description: "Pinging the bot!"
        };
    }

   async run(bot, m, args) {
      m.channel.send(":timer: You need to wait a **few** seconds!").then(msg => {
     const newemb = new Discord.RichEmbed()
.setColor(`#ffc0cb`)
.addField('Message', `${msg.createdTimestamp - m.createdTimestamp}ms`)
.addField('Bot', `${Math.round(bot.client.ping)}ms`)
msg.edit({embed: newemb})
       });
    }
};