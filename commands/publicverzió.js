module.exports = class {
    constructor() {
        this.help = {
            category: ":checkered_flag: Speciális",
            description: "Publikus Verziója a botnak. :computer:"
        };
    }

    run(bot, m, args) {
        return m.channel.send(`Készítsd el a saját botot... blabla https://glitch.com/edit/#!/dinohost-public`);
    }
};