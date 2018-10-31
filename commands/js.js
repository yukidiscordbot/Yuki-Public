const util = require("util");

module.exports = class {
    constructor() {
        this.help = {
            category: ":warning: Tulajdonos számára:",
            usage: "<kód>",
            description: "Bot tulajdonosnak csak!"
        };

        this.ownerOnly = true;
    }

    run(bot, m, args) {
        if (!args.length) return m.channel.send(':x: Hiba történt, a parancs végrehajtása közben: A parancs helytelen, vagy nem található. Kérlek ellenőrizd a fájlt ha helyesen megvannak adva a paraméterek. (Hibakód: dh-253)');

        m.delete().catch(() => { });

        const code = args.join(" ");
        let output = null;
        let error = null;

        try {
            output = eval(code);
        }
        catch (e) {
            error = e;
        }

        m.channel.send(`:white_check_mark: :inbox_tray: Adat: \`\`\`js\n${code}\`\`\` :white_check_mark: :outbox_tray: :robot: Válasz: \`\`\`js\n${error || util.inspect(output)} \`\`\``).catch(() => {
            m.channel.send(":x: A válasz túl hosszú.");
        });
    }
};