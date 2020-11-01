const Discord = require("discord.js");
const superagent = require("superagent");
let cooldown = new Set();
let cdseconds = 5;
module.exports = class {
    constructor() {
        this.help = {
            category: "User",
            description: "Some cute nekos! :3"
        };
    }

  async run(bot, message, args) {
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/avatar`);

    let hugEmbed = new Discord.RichEmbed()
    .setImage(body.url)
     .setColor("#36393F")

    message.channel.send(hugEmbed)
}
}