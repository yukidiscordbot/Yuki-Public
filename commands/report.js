const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

module.exports = class {
    constructor() {
        this.help = {
            category: ":checkered_flag: Speciális",
            description: "Egy felhasználónak beállítja hogy ne zavarják!"
        };
    }

    async run (bot, message, args) {
    let report = message.guild.channels.find(`name`, "report-logs");
    if (!report) return message.channel.send("The command missing some materials: ':tools: :x: **Setup Failure** You need to create an **``#report-logs``** channel!'");
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (!member)
        return message.reply("this user doesn't exists!");
    let reason = args.slice(1).join(' ');
    if (!reason) reason = "No reason!";
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(message.author.avatarURL)
        .setAuthor(' Action | Report', `https://www.shareicon.net/data/2017/06/22/887603_user_512x512.png`)
        .addField('User:', message.author)
        .addField('\n\n Reported User:', member.user)
        .addField('\n\n Reason:', reason)
        .setFooter(`Thank you for the reporting, the moderators will ban the user.`, `https://www.knowband.com/image/cache/data/Plugin%20Logo/3-1000x1000.jpg`)
    report.send(embed);
}

}