const Discord = require("discord.js");
const superagent = require("superagent");
module.exports = class {
    constructor() {
        this.help = {
            category: "NSFW",
            description: "Some random generated traps ew!"
        };
    }

  async run(bot, message, args) {
          const err = new Discord.RichEmbed()
      .setTitle("<:error:543851339713609745> Command Disabled")
      .setDescription(`This command has been disabled due\n**Underage NSFW**`)
      .setColor(`#ffc0cb`)
    message.channel.send(err)


}
}