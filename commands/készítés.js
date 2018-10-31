module.exports = class {
    constructor() {
        this.help = {
            category: ":white_check_mark: Felhasználó",
            description: "Megcsinálnom neked a szerveredet!"
        };
    }

    run(bot, m, args) {
        m.channel.send(":stopwatch: Szerver készítése folyamatban! 1%").then(msg => {
            msg.edit(`:stopwatch: Szerver készítése folyamatban! 2%`);
            msg.edit(`:stopwatch: Szerver készítése folyamatban! 3%`);
          msg.edit(`:stopwatch: Szerver készítése folyamatban! 5%`);
          msg.edit(`:stopwatch: Szerver készítése folyamatban! 15%`);
          msg.edit(`:stopwatch: Szerver készítése folyamatban! 25%`);
          msg.edit(`:stopwatch: Szerver készítése folyamatban! 34%`);
          msg.edit(`:stopwatch: Szerver készítése folyamatban! 45%`);
          msg.edit(`:stopwatch: Szerver készítése folyamatban! 56%`);
          msg.edit(`:stopwatch: Szerver készítése folyamatban! 67%`);
          msg.edit(`:stopwatch: Szerver készítése folyamatban! 78%`);
          msg.edit(`:stopwatch: Szerver készítése folyamatban! 96%`);
          msg.edit(`:stopwatch: Szerver készítése folyamatban! 98%`);
          msg.edit(`:stopwatch: Szerver készítése folyamatban! 100%`);
          msg.edit(":ballot_box_with_check: A játékszerveredet hamarosan megkapod. Kérlek írj a feljesztőnek hogy ``Hol a játékszerverem?`` és a tulajdonos megadja önnek az adatokat.");
        });
    }
};