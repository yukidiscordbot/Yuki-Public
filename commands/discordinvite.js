module.exports = class {
    constructor() {
        this.help = {
            category: ":checkered_flag: Speciális",
            description: "Szerverhez való csatlakozás."
        };
    }

    run(bot, m, args) {
        return m.channel.send(`:white_check_mark: **Meghívó**\n Csatlakozz a szerverre: https://discord.gg/ExqMAjT (Hivatalos Support Szerver: https://discord.gg/aGWzpEc)`);
    }
};
