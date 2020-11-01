const Discord = require("discord.js");
module.exports = class {
    constructor() {
        this.help = {
            category: "Fun",
            description: "That user is now % gay."
        };
    }

    async run(bot, message, args, prefix) {
              let user = message.mentions.users.first(); // Mentioned user
          let gay = Math.round(Math.random() * 100);
        if (!message.mentions.users.size) {
           return message.channel.send(`You are **${gay}**% gay!`)
        }
    message.delete(1);
    return message.channel.send(`${user.username} is **${gay}**% gay.`);
}
}