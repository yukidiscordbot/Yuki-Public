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

    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/neko`);

    let hugEmbed = new Discord.RichEmbed()
    .setTitle("Some neko images")
    .setImage(body.url)
    .setColor("RANDOM")
    .setFooter("© Yuki V4.2.7 | Powered by: nekos.life", "https://data.whicdn.com/images/307645312/large.jpg?t=1519144430");

    message.channel.send(hugEmbed)

}
}