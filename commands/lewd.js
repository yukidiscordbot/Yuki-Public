const superagent = require("snekfetch");
const Discord = require('discord.js')
module.exports = class {
    constructor() {
        this.help = {
            category: ":checkered_flag: Speciális",
            description: "Egy felhasználónak beállítja hogy ne zavarják!"
        };
    }

  async run(client, message, args, level) {
        if (!message.channel.nsfw) return message.channel.send('🚫 You can use this commands on NSFW Channel!')
    superagent.get('https://nekos.life/api/v2/img/lewd')
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
      .setTitle(`Enjoy your lewd image!`)
      .setImage(response.body.url)
      .setColor(`RANDOM`)
      .setTimestamp()
      .setFooter("© Yuki V4.2.7 | Powered by: nekos.life", "https://data.whicdn.com/images/307645312/large.jpg?t=1519144430");
  message.channel.send(lewdembed);
            });
        }
}