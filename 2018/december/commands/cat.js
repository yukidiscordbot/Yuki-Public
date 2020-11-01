const Discord = require("discord.js"),
superagent = require('superagent');
module.exports = class {
    constructor() {
        this.help = {
            category: ":checkered_flag: Speciális",
            description: "Egy felhasználónak beállítja hogy ne zavarják!"
        };
    }

    async run (client, message, args) {
          let {
        body
    } = await superagent
        .get(`http://aws.random.cat/meow`);
    const catembed = new Discord.RichEmbed()
        .setTitle('I like cats! Awww...')
        .setColor("RANDOM")
        .setImage(body.file)
        .setFooter("© Yuki V4.2.7 | Powered by: random.cat", "https://data.whicdn.com/images/307645312/large.jpg?t=1519144430");
    message.channel.send(catembed);
}
}