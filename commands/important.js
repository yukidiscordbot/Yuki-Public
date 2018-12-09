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
  .addField("Important Announcements", `Draw to me! If you want to draw, please join to my server [here](https://discord.gg/q3hsQ2K)`)
  message.channel.send(embed);
}
}