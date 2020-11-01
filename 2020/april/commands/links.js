const Discord = require('discord.js');

module.exports = class {
    constructor() {
        this.help = {
            category: "Information",
            description: "I will show some links."
        };
    }

    async run(client, message, args) {
      let embed = new Discord.RichEmbed()
      .setColor(`#36393F`)
        .setDescription(`[Support Server](https://discord.gg/ck8kajr)\n[Status](https://splitxplayz.statuspal.io)\n[Docs](https://splitxplayz.gitbook.io/yuki)\n[Dashboard](https://yukicanary.glitch.me)`)
      message.channel.send(embed)
    }
}