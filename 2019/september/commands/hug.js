const Discord = require("discord.js");
const superagent = require("superagent");
module.exports = class {
    constructor() {
        this.help = {
            category: "Roleplay",
            description: "Hugs a user."
        };
    }

  async run(bot, message, args) {
        let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!hugUser) return message.channel.send("<:error:543851339713609745> You forgot to mention somebody.");

    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/hug`);

    let hugEmbed = new Discord.RichEmbed()
    .setDescription(`**${message.author.username}** hugged **${message.mentions.users.first().username}**`)
    .setImage(body.url)
    .setColor("BLUE")
         .setFooter(`© Yuki V5.2.1`, "https://cdn.discordapp.com/avatars/489219428358160385/0df609e7bd5aadad66701a3bcf4570ee.png")

    message.channel.send(hugEmbed)

}
}