const fs = require('fs');

module.exports = class {
    constructor() {
        this.help = {
            category: ":white_check_mark: Felhasználó",
            usage: "[parancs]",
            description: "Megmutatja a parancs leírását, használatát. :information_source:"
        };
    }

    run(bot, m, args) {
        const commands = fs.readdirSync('./commands').filter(c => c.endsWith('.js')).map(c => c.slice(0, -3));

        if (args.length) {
            const command = args[0];
            const lcCommand = command.toLowerCase();
            const lcCommands = commands.map(c => c.toLowerCase());
            const index = lcCommands.indexOf(lcCommand);

            if (index === -1) return m.channel.send(':x: **Hiba**!\n Ismeretlen segítségkérő parancs.');

            const commandPath = `./commands/${commands[index]}.js`;

            try {
                const commandModule = bot.rq(commandPath);
                const commandInstance = new commandModule();
                const helpData = commandInstance.help || {};

                if (!helpData.category) helpData.category = "Uncategorized";
                if (!helpData.usage) helpData.usage = "Nincs kért használat a parancshoz.";
                if (!helpData.description) helpData.description = "Nincs leírás";

                m.channel.send(`Segítség a következőre: \`${commands[index]}\`\n\n__Kategória__: ${helpData.category}\n__Használat__: ${helpData.usage}\n__Leírás__: ${helpData.description}`);
            }
            catch (e) {
                m.channel.send('Error getting help for the command');
            }
        }
        else {
            const categorizedHelp = {};

            // You are not allowed to remove this
            const helpMessages = [`:wave: Üdvözöllek a segítségkérő parancsmenüpontomban!\nPrefixem: \`${bot.config.prefix}\``];

            commands.forEach(c => {
                const commandPath = `./commands/${c}.js`;

                try {
                    const commandModule = bot.rq(commandPath);
                    const commandInstance = new commandModule();
                    const helpData = commandInstance.help || {};

                    if (!helpData.category) helpData.category = "Uncategorized";
                    if (!helpData.usage) helpData.usage = "";
                    if (!helpData.description) helpData.description = "Nincsen leírása";

                    if (!categorizedHelp.hasOwnProperty(helpData.category)) categorizedHelp[helpData.category] = [];

                    categorizedHelp[helpData.category].push(`*${c}* ${helpData.usage ? `**${helpData.usage}** ` : ""}- ${helpData.description}\n`);
                }
                catch (e) { }
            });

            for (let i in categorizedHelp) {
                if (categorizedHelp.hasOwnProperty(i)) {
                    const toAdd = `\n\n__${i}__\n`;
                    if (helpMessages[helpMessages.length - 1].length + toAdd.length > 2000) helpMessages.push("");
                    helpMessages[helpMessages.length - 1] += toAdd;

                    categorizedHelp[i].forEach(h => {
                        if (helpMessages[helpMessages.length - 1].length + h.length > 2000) helpMessages.push("");
                        helpMessages[helpMessages.length - 1] += h;
                    });
                }
            }

            const sendMessage = index => {
                m.author.send(helpMessages[index]).then(() => {
                    index++;

                    if (helpMessages[index]) sendMessage(index);
                    else if (m.guild) {
                        m.channel.send(':white_check_mark: :mailbox_closed: **Ellenőrzés**\n A segítség megkérkezett! :tools: :heavy_check_mark:');
                    }
                }).catch(() => {
                    m.channel.send(':x: A következő hiba történt: Nem sikerült elküldenem a `direct messages` neked a parancsokat kérlek ellenőrzid hogy nem vagyok-e letiltva nálad.');
                });
            };

            sendMessage(0);
        }
    }
};