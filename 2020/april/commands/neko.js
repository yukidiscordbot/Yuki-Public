const Discord = require("discord.js");
const superagent = require("superagent");
module.exports = class {
    constructor() {
        this.help = {
            category: "User",
            description: "Some cute nekos! :3"
        };
    }

  async run(bot, message, args) {
           let embed = new Discord.RichEmbed()
      .setTitle(`<:error:543851339713609745> Channel Error`)
      .setDescription(`Sorry, but this command only can be used in a **N.S.F.W** marked channel.`)
      .setColor(`f01d0e`)
               if (!message.channel.nsfw) return message.channel.send(embed)
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/neko`);

    let hugEmbed = new Discord.RichEmbed()
    .setImage(body.url)
     .setColor("#36393F")

    message.channel.send(hugEmbed)

}
}