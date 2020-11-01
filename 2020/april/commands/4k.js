const Discord = require ("discord.js");
const superagent = require('superagent')
module.exports = class {
    constructor() {
        this.help = {
            category: "User",
            description: "The bot will search on Reddit.com for nsfw images, and then post here as an image."
        };
    }

    async run(client, message, args, cmd, prefix) {
      let embed = new Discord.RichEmbed()
      .setTitle(`<:error:543851339713609745> Channel Error`)
      .setDescription(`Sorry, but this command only can be used in a **N.S.F.W** marked channel.`)
      .setColor(`f01d0e`)
               if (!message.channel.nsfw) return message.channel.send(embed)


        superagent.get('https://nekobot.xyz/api/image')
    .query({ type: '4k'})
          .end((err, response) => {
               const embed2 = new Discord.RichEmbed()
                .setColor(`#ffc0cb`)
                .setImage(response.body.message);
      message.channel.send(embed2);
    });
        }
}