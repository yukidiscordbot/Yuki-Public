const Discord = require('discord.js');
const fs = require('fs');

module.exports = class {
    constructor() {
        this.help = {
            category: ":checkered_flag: Speciális",
            description: "Statiztikák a botról. :tools:"
        };
    }

    async run(bot, m, args) {
        const userCount = bot.client.guilds.map(g => g.memberCount).reduce((f, l) => f + l);
        const owner = bot.config.ownerIds.filter(id => bot.client.users.get(id)).map(id => bot.client.users.get(id).tag).join(", ");
        const commandCount = fs.readdirSync('./commands').filter(c => c.endsWith('.js')).length;

        const date = new Date(bot.client.uptime);
        const uptime = `${date.getUTCFullYear() - 1970}y ${date.getUTCMonth()}m ${date.getUTCDate() - 1}d ${date.getUTCHours()}h ${date.getUTCMinutes()}m ${date.getUTCSeconds()}s`;

        const { pollCount } = await bot.db.get('SELECT COUNT(blockMultiples) AS pollCount FROM polls');


        return m.channel.send(`:robot: Bot **Statiztikái**:\n **Tulajdonos${bot.config.ownerIds.length === 1 ? "" : "ok"}**: ${owner} \n Hivatalos Feljesztő: **SplitXPlayZ#2214** \n Operációs Rendszer: **Linux 4.4.0-1066-aws**.\n CPU Számláló: **4** \n CPU: **Intel(R) Xeon(R) CPU E5-2670 v2 @ 2.50GHz** \n Parancs Számláló: **${commandCount}** \n Prefix: **${bot.config.prefix}** \n Node.js: **${process.version.slice(1)}** \n Discord.js: **${Discord.version}** \nCsatornák: **${bot.client.channels.size}** \n Felhasználók: **${userCount}** \n Uptime: **${bot.config.prefix}uptime**`);
    }
};