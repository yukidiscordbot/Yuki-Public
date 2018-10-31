const util = require("util");

module.exports = class {
    constructor() {
        this.help = {
            category: ":warning: Tulajdonos számára:",
            description: "Leállítja a botot."
        };

        this.ownerOnly = true;
    }
    run(bot, m, args) {
        m.channel.send("Leállítás folyamatban... 1%").then(msg => {
            msg.edit(`Leállítás folyamatban... 2%`);
            msg.edit(`Leállítás folyamatban... 2%`);
            msg.edit(`Leállítás folyamatban... 2%`);
            msg.edit(`Leállítás folyamatban... 3%`);
          msg.edit(`Leállítás folyamatban... 4%`);
          msg.edit(`Leállítás folyamatban... 15%`);
          msg.edit(`Leállítás folyamatban... 25%`);
          msg.edit(`Leállítás folyamatban... 34%`);
          msg.edit(`Leállítás folyamatban... 45%`);
          msg.edit(`Leállítás folyamatban... 56%`);
          msg.edit(`Leállítás folyamatban... 67%`);
          msg.edit(`Leállítás folyamatban... 78%`);
          msg.edit(`Leállítás folyamatban... 96%`);
          msg.edit(`Leállítás folyamatban... 97%`);
          msg.edit(`Leállítás folyamatban... 98%`);
          msg.edit(`Leállítás folyamatban... 99%`);
          msg.edit(`Leállítás folyamatban... 100%`);
          msg.edit(`:white_check_mark: A leállítás parancs sikeresen megtörtént.`);
        });
    }
};