const Discord = require('discord.js');
const fs = require('fs');

module.exports = class {
    constructor() {
        this.help = {
            category: "General",
            description: "Gets stats about the bot"
        };
    }

    async run(bot, m, args) {
        const userCount = bot.client.guilds.map(g => g.memberCount).reduce((f, l) => f + l);
        const owner = bot.config.ownerIds.filter(id => bot.client.users.get(id)).map(id => bot.client.users.get(id).tag).join(", ");
        const commandCount = fs.readdirSync('./commands').filter(c => c.endsWith('.js')).length;

        const date = new Date(bot.client.uptime);
        const uptime = `${date.getUTCFullYear() - 1970}y ${date.getUTCMonth()}m ${date.getUTCDate() - 1}d ${date.getUTCHours()}h ${date.getUTCMinutes()}m ${date.getUTCSeconds()}s`;

        const { pollCount } = await bot.db.get('SELECT COUNT(blockMultiples) AS pollCount FROM polls');

        // You are not allowed to remove the "Original Developer" field on this
const newemb = new Discord.RichEmbed()
.setTitle("My Informations")
.setColor(0xFFBF00)
.addField('Owner', `${owner}`)
.addField('My Prefix', `${bot.config.prefix}`)
.addField('Servers', `${bot.client.guilds.size}`)
.addField('Users', `${userCount}`)
.addField('Channels', `${bot.client.channels.size}`)
.addField('Uptime', `${uptime}`)
.addField('Total Polls', `${pollCount}`)
.addField('API Heartbeat Ping', `${Math.round(bot.client.ping)}ms`)
.addField('Command Count', `${commandCount}`)
.addField('Docs', `[Click me (Its not finished yet!)](https://splitxplayz.gitbook.io/yuki)`)
.addField('Support Server', `[Click me](https://discord.gg/vdKwp6w)`)
.setTimestamp()
m.channel.send({embed: newemb})
}
}