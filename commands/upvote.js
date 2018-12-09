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
  .setColor("0xBF9000")
  .setTitle(``)
  .addField("Upvote Links", `https://discordbotlist.com/bots/489219428358160385/upvote`)
  .addField("WhAt tHiS tHiNg cAn Do?!44!", `If you vote to my bot, you will help to the bot gets to the top, and more guilds, and support the bot with that.`)
.setFooter("© Yuki V4.2.5", "https://data.whicdn.com/images/307645312/large.jpg?t=1519144430")
  message.channel.send(embed);
}
}