const Discord = require("discord.js");
module.exports = class {
    constructor() {
        this.help = {
            category: "Category 1",
            description: "a"
        };
    }

    async run(bot, message, args, prefix) {
        if (!message.channel.nsfw) return message.channel.send('🚫 You can use this commands on NSFW Channel!')

    let gayembed = new Discord.RichEmbed()
        .setTimestamp()
        .setColor('RED')
        .setTitle(`Error!`)
        .addField("I can't fap, i'm a girl. so sad. :c")
    message.delete(10);
    return message.channel.send(gayembed);
}
}