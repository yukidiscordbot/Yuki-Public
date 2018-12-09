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
  if (!message.channel.nsfw) return message.channel.send('🚫 You can use this commands on NSFW Channel!')

    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/boobs`);

    let hugEmbed = new Discord.RichEmbed()
    .setTitle("Some boobs.")
    .setImage(body.url)
    .setColor("RANDOM")
    .setFooter("© Yuki V4.2.5 | Powered by: nekos.life", "https://data.whicdn.com/images/307645312/large.jpg?t=1519144430");

    message.channel.send(hugEmbed)

}
}