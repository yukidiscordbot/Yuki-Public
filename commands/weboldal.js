module.exports = class {
    constructor() {
        this.help = {
            category: ":checkered_flag: Speciális",
            description: "Weboldalam!"
        };
    }

    run(bot, m, args) {
        return m.channel.send(`:wave::skin-tone-1: :robot: Hivatalos Weboldal: https://dinohost4.webnode.hu`);
    }
};