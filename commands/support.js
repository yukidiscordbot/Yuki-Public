const Discord = require("discord.js");

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
  .addField("Support Links", `[Click here](https://discord.gg/hpNT739)`)
  .setTimestamp()
  message.channel.send(embed);
}
}