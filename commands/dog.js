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
        .get(`https://random.dog/woof.json`);
    const dogembed = new Discord.RichEmbed()
        .setTitle("I like also dogs! Awww...")
        .setColor("RANDOM")
        .setImage(body.url)
        .setFooter("© Yuki V4.2.7 | Powered by: random.dog", "https://data.whicdn.com/images/307645312/large.jpg?t=1519144430");

    message.channel.send(dogembed);

}
}