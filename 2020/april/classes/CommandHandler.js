const fs = require('fs');
const Discord = require('discord.js');
exports.CommandHandler = class CommandHandler {
    constructor(bot) {
        this.bot = bot;
    }

    handleCommand(m, command, args) {
        const commands = fs.readdirSync('./commands').filter(c => c.endsWith('.js')).map(c => c.slice(0, -3));
        const lcCommands = commands.map(c => c.toLowerCase());
        const messageArray = m.content.split(" ");
        const index = lcCommands.indexOf(command);

        if (index === -1) return;

        const commandPath = `./commands/${commands[index]}.js`;

        try {
            const commandModule = this.bot.rq(commandPath);
            const commandInstance = new commandModule();
            if (commandInstance.ownerOnly === true && this.bot.config.ownerIds.indexOf(m.author.id) === -1) return  m.channel.send('<:error:543851339713609745> You cannot use this command because, you are not a **developer**!')
            if (commandInstance.dmOnly === true && m.guild) return m.channel.send('<:error:543851339713609745> The following command is only works at direct messages!');
            if (commandInstance.guildOnly === true && !m.guild) return m.channel.send('<:error:543851339713609745> The following command is only works at an server!');

            commandInstance.run(this.bot, m, args);
    } catch(e) {
      const newemb = new Discord.RichEmbed()
      .setTitle("<:error:543851339713609745> Command Error")
      .setDescription(`This command has responded with an **error**. Details:\n${e}`)
      .setColor(`f01d0e`)
      m.channel.send({embed: newemb})
    };
    }
}