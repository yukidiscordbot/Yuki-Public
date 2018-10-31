module.exports = class {
    constructor() {
        this.help = {
            category: ":white_check_mark: Felhasználó",
            description: ":moneybag: Megmutatja a verziót."
        };
    }

    run(bot, m, args) {
        return m.channel.send(`:robot: **V1.8.6**`);
    }
};