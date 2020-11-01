const superagent = require("snekfetch");
const Discord = require('discord.js')
module.exports = class {
    constructor() {
        this.help = {
            category: "NSFW",
            description: "Some lewd images"
        };
    }

  async run(client, message, args, level) {
        let embed = new Discord.RichEmbed()
      .setTitle(`<:error:543851339713609745> Channel Error`)
      .setDescription(`Sorry, but this command only can be used in a **N.S.F.W** marked channel.`)
      .setColor(`f01d0e`)
               if (!message.channel.nsfw) return message.channel.send(embed)
    superagent.get('https://nekos.life/api/v2/img/lewd')
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
      .setImage(response.body.url)
       .setColor("#36393F")
  message.channel.send(lewdembed);
            });
        }
}