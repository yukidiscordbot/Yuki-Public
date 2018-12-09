const Discord = require('discord.js');
module.exports = class {
    constructor() {
        this.help = {
            category: ":warning: Tulajdonos számára:",
            usage: "<kód>",
            description: "Bot tulajdonosnak csak!"
        };
    }

   async run(bot, m, args) {
      m.channel.send(":stopwatch: Pinging...").then(msg => {
     const newemb = new Discord.RichEmbed()
.setTitle(":ping_pong: Pong!")
.setColor("RANDOM")
.addField('📶 Latency (Round-Trip)', `${msg.createdTimestamp - m.createdTimestamp}ms`)
.addField(':heartbeat: API Heartbeat', `${Math.round(bot.client.ping)}ms`)
.setTimestamp()
msg.edit({embed: newemb})
       });
    }
};