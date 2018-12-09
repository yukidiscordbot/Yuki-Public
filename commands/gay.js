const Discord = require("discord.js");
module.exports = class {
    constructor() {
        this.help = {
            category: "Category 1",
            description: "a"
        };
    }

    async run(bot, message, args, prefix) {
          let gay = Math.round(Math.random() * 100);

    let gayembed = new Discord.RichEmbed()
        .setTimestamp()
        .setColor('RANDOM')
        .setTitle(``)
        .addField(`${message.author.username}'s gay count`, `${message.author.username} is ${gay}% gay!`)
    message.delete(10);
    return message.channel.send(gayembed);
}
}