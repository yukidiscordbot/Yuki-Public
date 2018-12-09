const Discord = require('discord.js');
module.exports = class {
    run(bot, m) {
        if (m.author.bot) return;

        bot.getConfig();
        const prefix = bot.config.prefix;

        if ((new RegExp(`^<@!?${bot.client.user.id}>$`)).exec(m.content)) return m.channel.sendEmbed(new Discord.RichEmbed()
      .setColor(`#a821f9`)
      .setTitle("Hello there!")
      .setDescription(`My prefix is \`${prefix}\`. Try \`${prefix}poll\` to make a poll or \`${prefix}help\` to get some command help!`));
        const mainPrefix = m.content.toLowerCase().startsWith(prefix.toLowerCase());
        const mention = (new RegExp(`^<@!?${bot.client.user.id}> `)).exec(m.content);

        if (!mainPrefix && !mention) return;

        const args = m.content.slice((mention || [prefix])[0].length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        bot.commandHandler.handleCommand(m, command, args);
    }
};