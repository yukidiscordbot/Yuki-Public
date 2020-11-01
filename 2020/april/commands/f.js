const Discord = require("discord.js");
const Fortnite = require("fortnite");
const currentSeason = "7";
module.exports = class {
    constructor() {
        this.help = {
            category: "Information",
            usage: "<epic-username> [platform pc/psn/xbl] {mode all/season}",
            description: "That user fortnite stats."
        };
    }

    async run(bot, message, args) {
          let meow = message.content.split(" ").slice(1);
    let args1 = meow.join(' ');
    if (!args1) {
        return message.channel.send(`**${message.author.username}** has paid their respects!`);
    }
    message.channel.send(`**${message.author.username}** has paid their respects for **${args1}**`)
}
}