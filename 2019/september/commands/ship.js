const Discord = require ("discord.js");
module.exports = class {
    constructor() {
        this.help = {
            category: "User",
            description: "The bot will search on Reddit.com for nsfw images, and then post here as an image."
        };
    }

    async run(client, message, args, cmd, prefix) {
        message.channel.send(message.author.username + ' **x** ' + message.guild.members.random().displayName + ' :cruise_ship:');
    }
}