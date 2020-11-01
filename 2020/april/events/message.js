const Discord = require('discord.js');
const config = require('../config.json')
const fs = require("fs");

module.exports = class {
    run(bot, m) {
  if(m.author.bot) return;
  if(m.channel.type === "dm") return;
      let prefix = config.prefix
        if (m.author.bot) return;
        bot.getConfig();
        if ((new RegExp(`^<@!?${bot.client.user.id}>$`)).exec(m.content)) return m.channel.sendEmbed(new Discord.RichEmbed()
        .setColor(`#d91414`)
     .setDescription(`Hi, my name is **Yuki#0545**, and i'm a robot with useful, and **premium** free features. View my commands with **y!help**.`)
      .addField(`Links`, `[Twitter](https://twitter.com/YukiDiscordBot) | [Website](http://yukicanary.glitch.me/) | [Guide](https://splitxplayz.gitbook.io/yuki)`))
      const mainPrefix = m.content.toLowerCase().startsWith(prefix.toLowerCase());
        let blacklist = JSON.parse(fs.readFileSync("./blacklist.json", "utf8"));
  if (!blacklist[m.author.id]) { 
    blacklist[m.author.id] = {state: false}};
    if (blacklist[m.author.id].state === true) return;
        const mention = (new RegExp(`^<@!?${bot.client.user.id}> `)).exec(m.content);
        if (!mainPrefix && !mention) return;


        const args = m.content.slice((mention || [prefix])[0].length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        bot.commandHandler.handleCommand(m, command, args);
}
};