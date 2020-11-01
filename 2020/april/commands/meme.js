const Discord = require ("discord.js");
const randomPuppy = require('random-puppy');
module.exports = class {
    constructor() {
        this.help = {
            category: "User",
            description: "A random generated meme from reddit."
        };
    }

    async run(client, message, args, cmd, prefix) {
    var subreddits = [
        'memes',
        'meme'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
            const embed = new Discord.RichEmbed()
                   .setColor("#36393F")
                  .setImage(url);
            message.channel.send({embed})
                  });
        }
}

