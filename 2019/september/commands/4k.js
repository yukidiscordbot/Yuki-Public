const Discord = require ("discord.js");
const randomPuppy = require('random-puppy');
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

    var subreddits = [
        'NSFW_Wallpapers',
        'SexyWallpapers',
        'HighResNSFW',
        'nsfw_hd',
        'UHDnsfw'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
            const embed = new Discord.RichEmbed()
                .setColor(`#ffc0cb`)
                .setImage(url);
            message.channel.send({embed})
                  });
        }
}