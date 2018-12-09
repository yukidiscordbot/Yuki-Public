const Discord = require ("discord.js");
const randomPuppy = require('random-puppy');
module.exports = class {
    constructor() {
        this.help = {
            category: ":checkered_flag: Speciális",
            description: "Szerverhez való csatlakozás."
        };
    }

    async run(client, message, args, cmd, prefix) {
    if (!message.channel.nsfw) return message.reply("🚫 You can use this command only on nsfw channels!");

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
                .setColor("RANDOM")
                .setAuthor("4k")
                .setFooter("Enjoy your 4k image!")
                .setImage(url);
            message.channel.send({embed})
                  });
        }
}