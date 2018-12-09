const fs = require('fs');
const Discord = require('discord.js');
exports.CommandHandler = class CommandHandler {
    constructor(bot) {
        this.bot = bot;
    }

    handleCommand(m, command, args) {
        const commands = fs.readdirSync('./commands').filter(c => c.endsWith('.js')).map(c => c.slice(0, -3));
        const lcCommands = commands.map(c => c.toLowerCase());
        const index = lcCommands.indexOf(command);

        if (index === -1) return;

        const commandPath = `./commands/${commands[index]}.js`;

        try {
            const commandModule = this.bot.rq(commandPath);
            const commandInstance = new commandModule();

            if (commandInstance.ownerOnly === true && this.bot.config.ownerIds.indexOf(m.author.id) === -1) return m.channel.send("You need an ``Bot Owner`` permission!");
            if (commandInstance.dmOnly === true && m.guild) return m.channel.send(':x: Only use at the direct messages!');
            if (commandInstance.guildOnly === true && !m.guild) return m.channel.send(':x: Only in a server.');

            commandInstance.run(this.bot, m, args);
    } catch(e) {
      const newemb = new Discord.RichEmbed()
      .setTitle("An error occurred.")
      .setDescription(`**${e}**`)
      .setColor("RED")
      .setFooter("Please report at our support server.", "https://cdn1.iconfinder.com/data/icons/color-bold-style/21/08-512.png");
      m.channel.send({embed: newemb})
    };
    }
}