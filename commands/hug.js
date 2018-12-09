const Discord = require("discord.js");
const superagent = require("superagent");
module.exports = class {
    constructor() {
        this.help = {
            category: ":checkered_flag: Speciális",
            description: "Egy felhasználónak beállítja hogy ne zavarják!"
        };
    }

  async run(bot, message, args) {
        let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!hugUser) return message.channel.send("Make sure you mention someone!");

    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/hug`);

    let hugEmbed = new Discord.RichEmbed()
    .setTitle("Hug!")
    .setDescription(`**${message.author.username}** hugged **${message.mentions.users.first().username}**`)
    .setImage(body.url)
    .setColor("RANDOM")
    .setFooter("© Yuki V4.2.7 | Powered by: nekos.life", "https://data.whicdn.com/images/307645312/large.jpg?t=1519144430");

    message.channel.send(hugEmbed)

}
}