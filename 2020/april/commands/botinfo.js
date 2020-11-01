var Discord = require('discord.js');
    let ustat = require('ustat');
    let stackos = require('stackos').info;
    var osu = require('os-utils');
    var os = require('os');
    var cpu2 = require('cpu-stat')
    let cpu = require('cpu')
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
              const userCount = `${parseInt(`${bot.client.guilds.map(g => g.memberCount).reduce((f, l) => f + l)}`).toLocaleString()}`
        const commandCount = fs.readdirSync('./commands').filter(c => c.endsWith('.js')).length;

        const date = new Date(bot.client.uptime);
        const uptime = `**${date.getUTCFullYear() - 1970}** years **${date.getUTCMonth()}** months **${date.getUTCDate() - 1}** days **${date.getUTCHours()}** hours **${date.getUTCMinutes()}** minutes **${date.getUTCSeconds()}** seconds`
  let embed = new Discord.RichEmbed()
  .setColor(`#d91414`)
  .setThumbnail("https://cdn.discordapp.com/avatars/489219428358160385/19ad8d8c2fefd03fa0e1a2e49a2915c4.png")
    .addField('Developer', `${owner}`, true)
    .addField("Discord Library Version", `11.5.1`, true)
  .addField("Bot Version", `5.3.1`, true)
  .addField("Library", `JavaScript (discord.js)`, true)
.addField('Servers Loaded', `${parseInt(`${bot.client.guilds.size}`).toLocaleString()} (**${bot.client.guilds.size}**)`, true)
.addField('Users Loaded', `${userCount} (**${bot.client.guilds.map(g => g.memberCount).reduce((f, l) => f + l)}**)`, true)
.addField('Channels Loaded', `${parseInt(`${bot.client.channels.size}`).toLocaleString()} (**${bot.client.channels.size}**)`, true)
  .addField('Total Shards', `**2** | **2**\n<:shard_online:510880874443702294> Shard #1\n<:shard_online:510880874443702294> Shard #2`, true)
  .addField('Uptime', `${uptime}`, true)
.addField("System Usage", `CPU: \`${Math.round((process.cpuUsage().user + process.cpuUsage().system) / 2048)} MB (${cpu.num()}%)\` | \nMemory: \`${Math.round((stackos.memory.total / 1000000))} MB (${ustat.usedmem('kb') % 100}%)\``, true)
 .addField("CPU", `${os.cpus().map(i => `${i.model}`)[0]}`, true)
.addField(`Operating System`, `${platform.os}`, true)
  message.channel.send(embed);
}
}