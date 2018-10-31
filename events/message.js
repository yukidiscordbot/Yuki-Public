module.exports = class {
    run(bot, m) {
        if (m.author.bot) return;

        bot.getConfig();
        const prefix = bot.config.prefix;

        if ((new RegExp(`^<@!?${bot.client.user.id}>$`)).exec(m.content)) return m.reply("please use with dh!segítség or <@489219428358160385> segítség to get the help list."); 
        const mainPrefix = m.content.toLowerCase().startsWith(prefix.toLowerCase());
        const mention = (new RegExp(`^<@!?${bot.client.user.id}> `)).exec(m.content);

        if (!mainPrefix && !mention) return;

        const args = m.content.slice((mention || [prefix])[0].length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        bot.commandHandler.handleCommand(m, command, args);
    }
};