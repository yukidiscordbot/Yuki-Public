module.exports = class {
    constructor() {
        this.help = {
            category: ":checkered_flag: Speciális",
            description: "Megmutatja hogy most van-e karbantartás folyamatban."
        };
    }

    run(bot, m, args) {
        return m.channel.send(`:x: Nincsen jelenleg tervben karbantartás.`);
    }
};