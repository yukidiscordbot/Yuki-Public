const Discord = require("discord.js"),
superagent = require('superagent');
module.exports = class {
    constructor() {
        this.help = {
            category: "Fun",
            description: "Random dog images."
        };
    }

    async run (client, message, args) {
          let {
        body
    } = await superagent
        .get(`https://random.dog/woof.json`);
    const dogembed = new Discord.RichEmbed()
            .setColor(`#ffc0cb`)
        .setImage(body.url)

    message.channel.send(dogembed);

}
}