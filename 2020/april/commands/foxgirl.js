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
    .get(`https://nekos.life/api/v2/img/fox_girl`);
  
    let hentaiEmbed = new Discord.RichEmbed()
    .setImage(body.url)
        .setColor(`#ffc0cb`)
    message.channel.send(hentaiEmbed);

}
}