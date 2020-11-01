const Discord = require("discord.js");
const superagent = require("superagent");
module.exports = class {
    constructor() {
        this.help = {
            category: "Roleplay",
            description: "Pats a user!",
          usage: "@User"
        };
    }

  async run(bot, message, args) {
        let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!hugUser) return message.channel.send("<:error:543851339713609745> You forgot to mention somebody.");

    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/pat`);

    let hugEmbed = new Discord.RichEmbed()
    .setDescription(`**${message.author.username}** patted **${message.mentions.users.first().username}**`)
    .setImage(body.url)
    .setColor("GREEN")
     .setFooter(`© Yuki V5.2.0`, "https://cdn.discordapp.com/avatars/489219428358160385/c056d11e4e241630cd7b16aa262e48e0.png?size=2048")

    message.channel.send(hugEmbed)

}
}