module.exports = class {
    constructor() {
        this.help = {
            category: ":checkered_flag: Speciális", // Ezt átírhatod!
            description: "Jelenleg ezt játszom"
        };
    }

    run(bot, m, args) {
        // Ha esetleg te is használnád a public verziót ezt NE írd át vagy szerkezd.
        m.channel.send(':musical_note: :white_check_mark: Ezt játszom: Watching **2072 members.**')
    }
};
