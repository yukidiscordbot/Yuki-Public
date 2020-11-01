module.exports = class {
    constructor() {
        this.help = {
            category: ":checkered_flag: Speciális",
            description: "Egy felhasználónak beállítja hogy ne zavarják!"
        };
    }

    run(bot, m, args) {
        return m.reply(`mostmár **nincs gépnél**! (Használta a következő parancsot: dh!afk)`);
    }
};