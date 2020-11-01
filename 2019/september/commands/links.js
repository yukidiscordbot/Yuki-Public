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
      .setTitle(`My Links`)
      .setColor(`4287f5`)
        .setDescription(`[Support Server](https://discord.gg/ck8kajr)\n[Status](https://splitxplayz.statuspal.io)\n[Twitter](https://twitter.com/YukiDiscordBot)\n[Guide](https://splitxplayz.gitbook.io/yuki)`)
     .setFooter(`© Yuki Old V4.35`, "https://cdn.discordapp.com/avatars/562357309548920840/0df609e7bd5aadad66701a3bcf4570ee.png?size=2048")
      message.channel.send(embed)
    }
}