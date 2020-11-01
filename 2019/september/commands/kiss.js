const Discord = require("discord.js");
const superagent = require("superagent");
module.exports = class {
    constructor() {
        this.help = {
            category: "Roleplay",
            description: "Kisses a user!",
          usage: "@User"
        };
    }

  async run(bot, message, args) {
        let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!hugUser) return message.channel.send("<:error:543851339713609745> You forgot to mention somebody.");

    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/kiss`);

    let hugEmbed = new Discord.RichEmbed()

    .setDescription(`**${message.author.username}** kissed **${message.mentions.users.first().username}**`)
    .setImage(body.url)
    .setColor(`GREEN`)
     .setFooter(`© Yuki Old V4.35`, "https://cdn.discordapp.com/avatars/562357309548920840/0df609e7bd5aadad66701a3bcf4570ee.png?size=2048")

    message.channel.send(hugEmbed)

}
}