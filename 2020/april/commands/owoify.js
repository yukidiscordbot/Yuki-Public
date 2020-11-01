const Discord = require('discord.js');
const superagent = require("superagent");
module.exports = class {
    constructor() {
        this.help = {
            category: "User",
            description: "That word is now illegal!"
        };
    }

  async run(client, msg, args, text) {
        if (!args[0]) return msg.channel.send('<:error:543851339713609745> Sorry, but no any message was provided.');

        const txt = args.join(" ");
        if (txt.length > 100) return msg.channel.send('<:error:543851339713609745> Limit reached.');

        let {body} = await superagent
    .get(`https://nekos.life/api/v2/owoify?text=${txt}`);
        if (body.owo === null) return msg.channel.send('<:error:543851339713609745> Cannot owoify the provided message.');
        msg.channel.send(body.owo);
    }
}