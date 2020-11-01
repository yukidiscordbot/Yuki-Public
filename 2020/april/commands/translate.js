const Discord = require("discord.js");
const superagent = require("superagent");
module.exports = class {
    constructor() {
        this.help = {
            category: "NSFW",
            description: "Random hentai images!"
        };
    }

  async run(client, message, args, level) {
    message.channel.send(`<:error:543851339713609745> API connection timed out.`)
  }
}