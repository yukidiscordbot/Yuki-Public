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

    async run (client, message, args, level) {

  let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle(``)
  .addField("Bot Data", `**Music Bot Invite**: [Click here](https://discordapp.com/oauth2/authorize?client_id=506314865137156096&permissions=238546256&scope=bot) \n**Creation Date**: September 11th 2018, 23:43:20\n**Bot ID**: ${message.client.user.id}\n**Bot Owner**: SplitXPlayZ#2214\n**Version**: V4.2.5\n**Support Server**: [Click Here](https://discord.gg/sMJqjKM)`)
  .addBlankField()
  .addField("About", `This bot is maded for moderate, anime, osu, nsfw, fun. If you like it? **Upvote!**`)
  .addField("Bug Report", `If you find a bug in me? Join to your [official](https://discord.gg/sMJqjKM) server!`)
  message.channel.send(embed);
}
}