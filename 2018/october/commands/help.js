module.exports = class {
    constructor() {
        this.help = {
            category: ":checkered_flag: Speciális", // Ezt átírhatod!
            description: "Help Command Prefix" // Ezt átírhatod!
        };
    }

    run(bot, m, args) {
        // Ha esetleg te is használnád a public verziót ezt NE írd át vagy szerkezd.
        m.channel.send('Currently now set help command is: dh!segítség or mention segítség | Currently you cant edit the help command prefix.')
    }
};
