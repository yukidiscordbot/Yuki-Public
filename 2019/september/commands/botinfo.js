var Discord = require('discord.js');
    var osu = require('os-utils');
    var os = require('os');
    var cpu = require('cpu-stat')
    var platform = require('platform')
    var prettyMs = require('pretty-ms');
    var fs = require('fs')

module.exports = class {
    constructor() {
        this.help = {
            category: "Information",
            description: "Shows the bot informations"
        };
    }

    async run (bot, message, args, level) {
              const owner = bot.config.ownerIds.filter(id => bot.client.users.get(id)).map(id => bot.client.users.get(id).tag).join(", ");
              const userCount = bot.client.guilds.map(g => g.memberCount).reduce((f, l) => f + l);
        const commandCount = fs.readdirSync('./commands').filter(c => c.endsWith('.js')).length;

        const date = new Date(bot.client.uptime);
        const uptime = `${date.getUTCFullYear() - 1970}y ${date.getUTCMonth()}m ${date.getUTCDate() - 1}d ${date.getUTCHours()}h ${date.getUTCMinutes()}m ${date.getUTCSeconds()}s`
  let embed = new Discord.RichEmbed()
  .setColor(`f59402`)
  .setThumbnail("https://cdn.discordapp.com/avatars/489219428358160385/0df609e7bd5aadad66701a3bcf4570ee.png")
    .addField('Bot Developer', `${owner}`, true)
  .addField("Bot Version", `5.2.1`, true)
.addField('Servers', `${bot.client.guilds.size}`, true)
.addField('Users', `${userCount}`, true)
.addField('Channels', `${bot.client.channels.size}`, true)
  .addField('Bot Uptime', `${uptime}`, true)
.addField("Memory Usage", `${(os.totalmem() / 2056 / 2056).toFixed(2)} MB`, true)
  .addField("Discord.js Version", `${Discord.version}`, true)
        .addField("CPU Usage", `${(process.memoryUsage().heapUsed / 2056 / 2056).toFixed(2)}`, true)
      .addField(`Operating System`, `${platform.os}`, true)
  .addField("CPU Model", `${os.cpus().map(i => `${i.model}`)[0]}`, true)
  message.channel.send(embed);
}
}