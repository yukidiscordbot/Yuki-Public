const Discord = require('discord.js');
const fs = require('fs');

module.exports = class {
    constructor() {
        this.help = {
            category: ":checkered_flag: Speciális",
            description: "A bot futatási ideje"
        };
    }

    async run(bot, m, args) {
        const userCount = bot.client.guilds.map(g => g.memberCount).reduce((f, l) => f + l);
        const owner = bot.config.ownerIds.filter(id => bot.client.users.get(id)).map(id => bot.client.users.get(id).tag).join(", ");
        const commandCount = fs.readdirSync('./commands').filter(c => c.endsWith('.js')).length;

        const date = new Date(bot.client.uptime);
        const uptime = `${date.getUTCFullYear() - 1970}y ${date.getUTCMonth()}m ${date.getUTCDate() - 1}d ${date.getUTCHours()}h ${date.getUTCMinutes()}m ${date.getUTCSeconds()}s`;

        const { pollCount } = await bot.db.get('SELECT COUNT(blockMultiples) AS pollCount FROM polls');

        // NEM távolíthatod el a Hivatalos feljesztő részleget.
        m.channel.send(`:stopwatch: :runner: __Futatási Idő__: ${uptime} :heavy_check_mark:`);
    }
};