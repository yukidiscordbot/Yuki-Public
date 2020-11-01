const Discord = require("discord.js"),
superagent = require('superagent');
module.exports = class {
    constructor() {
        this.help = {
            category: "Fun",
            description: "Random cat images."
        };
    }

    async run (client, message, args) {
          let {
        body
    } = await superagent
        .get(`http://aws.random.cat/meow`);
    const catembed = new Discord.RichEmbed()
            .setColor(`#ffc0cb`)
        .setImage(body.file)
    message.channel.send(catembed);
}
}