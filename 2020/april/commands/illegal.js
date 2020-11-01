const Discord = require('discord.js');
var Jimp = require("jimp");
module.exports = class {
    constructor() {
        this.help = {
            category: "User",
            description: "That word is now illegal!"
        };
    }

  async run(client, message, args, tools) {
    let meow = message.content.split(" ").slice(1);
    let args1 = meow.join(' ');
    let illegal = `https://storage.googleapis.com/is-now-illegal.appspot.com/gifs/` + args1.toUpperCase() + `.gif`;
    if (!args1) {
        return message.channel.send('<:error:543851339713609745> No any word was provided yet.');
    }
    if (meow.length > 1) {
        return message.channel.send('<:error:543851339713609745> Sorry, but only **1** word was allowed.');
    }
    const emb = new Discord.RichEmbed();
    emb.setAuthor("Trump has now made " + meow + " illegal!");
    emb.setColor(`03fcec`)
    emb.setImage(illegal);
    message.channel.send({
        embed: emb
    })
}
}