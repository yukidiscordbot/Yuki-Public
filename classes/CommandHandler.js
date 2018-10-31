const fs = require('fs');

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

            if (commandInstance.ownerOnly === true && this.bot.config.ownerIds.indexOf(m.author.id) === -1) return m.channel.send(':x: :fire:  ***Nincs jogod ehhez***! \nHiányzó jog: `Bot Tulajdonos`.');
            if (commandInstance.dmOnly === true && m.guild) return m.channel.send(':x: Csak itt használhatod!');
            if (commandInstance.guildOnly === true && !m.guild) return m.channel.send(':x: Ezt a parancsot csak a szerveren használhatod!');

            commandInstance.run(this.bot, m, args);
        }
        catch (e) {
            m.channel.send(':x: Hiba történt, a parancs végrehajtása közben: A parancs helytelen, vagy nem található. Kérlek ellenőrizd a fájlt ha helyesen megvannak adva a paraméterek. (Hibakód: dh-967)');

            console.error(e);
        }
    }
};