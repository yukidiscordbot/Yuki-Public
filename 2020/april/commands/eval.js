const { ShardingManager } = require('discord.js');
const Discord = require("discord.js");
const moment = require("moment");
const fs = require("fs");
const fetchUser = require("discord.js");
const shard = require("discord.js");
const uptime = require("discord.js");
const Budi = require("discord.js").RichEmbed
const status = require("discord.js");
const util = require("util");
const warningTokenMessage = ["Uncaught EvalError: Refused to evaluate a string as JavaScript because 'unsafe-eval' is not an allowed source of script"]
module.exports = class {
    constructor() {
        this.help = {
            category: "Bot Owner",
            usage: "<code>",
            description: "Testing some stuffs on the bot, only for the bot owner."
        };

        this.ownerOnly = true;
    }

    async run(client, message, args, bot) {
    try { 
        let codein = args.join(" ");
            if (!codein) return message.channel.send(`<:error:543851339713609745> Provide a code to evaluate.`)

        let code = eval(codein);
      
        if (!codein) return;

        if (codein.includes(`token`)) {
                     // if (error) throw new Error(error);
          code = warningTokenMessage[Math.floor(Math.random() * warningTokenMessage.length)];
        }
               else if (codein.includes(`client.config`)) {
          code = warningTokenMessage[Math.floor(Math.random() * warningTokenMessage.length)];
        } else {
          code = eval(code);
        }

        if (typeof code !== 'string')
            code = require('util').inspect(code, { depth: 0 });
        let embed = new Discord.RichEmbed()
        .setColor(`5feb34`)
        .addField(':inbox_tray: Input', `\`\`\`js\n${codein}\`\`\``)
        .addField(':outbox_tray: Output', `\`\`\`js\n${code}\n\`\`\``)

        message.channel.send(embed)
    } catch(e) {
      let errorembed = new Discord.RichEmbed()
      .setColor(`ff0800`)
      .addField(':outbox_tray: Output Error', `\`\`\`js\n${e}\`\`\``)
      message.channel.send(errorembed)
    }
}
}