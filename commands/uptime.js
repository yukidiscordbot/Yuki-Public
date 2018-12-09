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

        const date = new Date(bot.client.uptime);
        const uptime = `${date.getUTCDate() - 1} days, ${date.getUTCHours()} hours, ${date.getUTCMinutes()} minutes, ${date.getUTCSeconds()} seconds, ${date.getUTCMilliseconds()} milliseconds`;
      
      m.channel.send(`${uptime}`)
    }
}