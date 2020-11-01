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
  .addField("Current Version", `V4.2.7`)
  .addField("Change Logs", `\`\`\`js\nAdded channel deleted/created logging\`\`\` `)
  .setTimestamp()
  message.channel.send(embed);
}
}