const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

module.exports = class {
    constructor() {
        this.help = {
            category: "Moderation",
            description: "Report a user with a reason."
        };
    }

    async run (bot, message, args) {
    let report = message.guild.channels.find(`name`, "mod-logs");
    if (!report) return message.channel.send("You need to create any mod-logs channel.");
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (!member)
        return message.channel.send("This user is doesn't exists!");
    let reason = args.slice(1).join(' ');
    if (!reason) reason = "No Reason!";
    let embed = new Discord.RichEmbed()
            .setAuthor('Report', 'https://cdn.discordapp.com/emojis/465245981613621259.png?v=1')
            .addField('User', `${member.user.tag}\n(${member.user.id})`, true)
            .addField('Reported by', `${message.author.tag}\n(${message.author.id})`, true)
            .addField('Reason', `${reason}`)
            .setColor('0xfc4f35')
     .setFooter(`© Yuki Old V4.35`, "https://cdn.discordapp.com/avatars/562357309548920840/0df609e7bd5aadad66701a3bcf4570ee.png?size=2048")

            .setTimestamp();
    report.send(embed);
}

}