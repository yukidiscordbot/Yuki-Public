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
        let embed = new Discord.RichEmbed()
      .setTitle(`<:error:543851339713609745> Channel Error`)
      .setDescription(`Sorry, but this command only can be used in a **N.S.F.W** marked channel.`)
      .setColor(`f01d0e`)
               if (!message.channel.nsfw) return message.channel.send(embed)

    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/trap`);

    let hugEmbed = new Discord.RichEmbed()
    .setImage(body.url)
    .setColor("RED")

    message.channel.send(hugEmbed)

}
}