const Discord = require("discord.js");
const superagent = require("superagent");
module.exports = class {
    constructor() {
        this.help = {
            category: "NSFW",
            description: "Random hentai images!"
        };
    }

  async run(client, message, args, level) {
    let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/Random_hentai_gif`);
           let embed = new Discord.RichEmbed()
      .setTitle(`<:error:543851339713609745> Channel Error`)
      .setDescription(`Sorry, but this command only can be used in a **N.S.F.W** marked channel.`)
      .setColor(`f01d0e`)
               if (!message.channel.nsfw) return message.channel.send(embed)
  
    let hentaiEmbed = new Discord.RichEmbed()
    .setImage(body.url)
        .setColor(`#ffc0cb`)
    message.channel.send(hentaiEmbed);

}
}