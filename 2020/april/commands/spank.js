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
    .get(`https://nekos.life/api/v2/img/spank`);
           let embed = new Discord.RichEmbed()
      .setTitle(`<:error:543851339713609745> Channel Error`)
      .setDescription(`Sorry, but this command only can be used in a **N.S.F.W** marked channel.`)
      .setColor(`f01d0e`)
               if (!message.channel.nsfw) return message.channel.send(embed)
  
            let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!hugUser) return message.channel.send("<:error:543851339713609745> You forgot to mention somebody.");
    let hentaiEmbed = new Discord.RichEmbed()
        .setDescription(`**${message.author.username}** spanked **${message.mentions.users.first().username}**`)
    .setImage(body.url)
        .setColor(`#ffc0cb`)
    message.channel.send(hentaiEmbed);

}
}