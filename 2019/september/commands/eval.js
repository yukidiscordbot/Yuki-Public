const { ShardingManager } = require('discord.js');
const Discord = require("discord.js");
const fs = require("fs");
let xp = require("../xp.json");
const fetchUser = require("discord.js");
const shard = require("discord.js");
const uptime = require("discord.js");
const Budi = require("discord.js").RichEmbed
const status = require("discord.js");
const util = require("util");
const warningTokenMessage = ["Stop trying to get my token, please?", "You can-can't view the bot token.", "Fine, my token is:", "Specify you must read reddit.com", "Use me with y!help!"]
module.exports = class {
    constructor() {
        this.help = {
            category: "Bot Owner",
            usage: "<code>",
            description: "Testing some stuffs on the bot, only for the bot owner."
        };

        this.ownerOnly = true;
    }

    async run(client, message, args) {
    try { 
        let codein = args.join(" ");
      
        let code = eval(codein);
      
        if (!codein) return;

        if (codein.includes(`token`)) {
          code = warningTokenMessage[Math.floor(Math.random() * warningTokenMessage.length)];
          message.channel.send(`:warning: You tried to view the bot token, that is against the privacy!`)
        } else {
          code = eval(code);
        }

        if (typeof code !== 'string')
            code = require('util').inspect(code, { depth: 0 });
        let embed = new Discord.RichEmbed()
        .setColor(`5feb34`)
        .addField(':inbox_tray: Input', `\`\`\`js\n${codein}\`\`\``)
        .addField(':outbox_tray: Output', `\`\`\`js\n${code}\n\`\`\``)
     .setFooter(`© Yuki V5.2.0`, "https://cdn.discordapp.com/avatars/489219428358160385/c056d11e4e241630cd7b16aa262e48e0.png?size=2048")

        message.channel.send(embed)
    } catch(e) {
      let errorembed = new Discord.RichEmbed()
      .setColor(`ff0800`)
      .addField(':outbox_tray: Output Error', `\`\`\`js\n${e}\`\`\``)
     .setFooter(`© Yuki V5.2.0`, "https://cdn.discordapp.com/avatars/489219428358160385/c056d11e4e241630cd7b16aa262e48e0.png?size=2048")
      message.channel.send(errorembed)
    }
}
}