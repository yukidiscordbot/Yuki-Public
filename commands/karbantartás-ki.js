const util = require("util");

module.exports = class {
    constructor() {
        this.help = {
            category: ":warning: Tulajdonos számára:",
            description: "Bekapcsolja a karbantartó módot."
        };

        this.ownerOnly = true;
    }

    run(bot, m, args) {
        return m.channel.send(`:ballot_box_with_check: Karbantartó mód kikapcsolva, ilyenkor minden felhasználó használhatja a parancsaimat.`);
    }
};