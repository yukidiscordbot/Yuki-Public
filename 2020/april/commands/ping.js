const Discord = require('discord.js');
const moment = require("moment");
const timestamp = `[${moment().format("YYYY-MM-DD HH:mm:ss")}]:`;
module.exports = class {
    constructor() {
        this.help = {
            category: "Other",
            description: "Pinging the bot!"
        };
    }

   async run(bot, m, args) {
            const msg = await m.channel.send(":stopwatch: Please wait a moment or two.");
            msg.edit(`> Message roundtrip took: \`${msg.createdTimestamp - m.createdTimestamp}ms\`\n> API heartbeat took: \`${Math.round(bot.client.ping)}ms\``);
} catch (error) {
            console.error(`${timestamp} ${error}`);
        }
	}