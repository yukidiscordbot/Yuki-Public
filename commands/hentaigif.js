const Discord = require("discord.js");
const superagent = require("superagent");
module.exports = class {
    constructor() {
        this.help = {
            category: ":checkered_flag: Speciális",
            description: "Egy felhasználónak beállítja hogy ne zavarják!"
        };
    }

  async run(client, message, args, level) {
    let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/Random_hentai_gif`);
    if (!message.channel.nsfw) return message.reply(" You must be in a N.S.F.W channel to use this command.");
  
    let hentaiEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Hentai is art.")
    .setImage(body.url)
    .setColor("RANDOM")
    .setFooter("© Yuki V4.2.7 | Powered by: nekos.life", "https://data.whicdn.com/images/307645312/large.jpg?t=1519144430");
    message.channel.send(hentaiEmbed);

}
}