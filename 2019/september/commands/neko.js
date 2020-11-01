const Discord = require("discord.js");
const superagent = require("superagent");
module.exports = class {
    constructor() {
        this.help = {
            category: "User",
            description: "Some cute nekos! :3"
        };
    }

  async run(bot, message, args) {

    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/neko`);

    let hugEmbed = new Discord.RichEmbed()
    .setImage(body.url)
        .setColor(`BLUE`)

    message.channel.send(hugEmbed)

}
}