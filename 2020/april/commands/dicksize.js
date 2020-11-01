const Discord = require ("discord.js");
module.exports = class {
    constructor() {
        this.help = {
            category: "User",
            description: "The bot will search on Reddit.com for nsfw images, and then post here as an image."
        };
    }

    async run(client, message, args, cmd, prefix) {
              let dicksize = ["8=D", "8==D", "8===D", "8====D", "8=====D", "8======D", "8=======D", "8========D", "8=========D", "8==========D", "8============D"];
        let dickuser = message.mentions.users.first();

        if (!dickuser) {
            return message.channel.send('<:error:543851339713609745> You forgot to mention somebody.');
        }
      let dickembed = new Discord.RichEmbed()
      .setTitle(`${dickuser.username}#${dickuser.discriminator}`)
      .setDescription(`${dicksize[~~Math.floor(Math.random() * dicksize.length)]}`)
      .setColor(`34ebe8`)
      message.channel.send(dickembed)
    }
}