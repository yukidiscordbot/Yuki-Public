module.exports = class {
    constructor() {
        this.help = {
            category: ":white_check_mark: Felhasználó",
            description: "Ellenőrzőm hogy van-e szervered."
        };
    }

    run(bot, m, args) {
        m.channel.send(":stopwatch: Szerver ellenőrzése folyamatban! 1%").then(msg => {
            msg.edit(`:stopwatch: Szerver ellenőrzése folyamatban! 2%`);
            msg.edit(`:stopwatch: Szerver ellenőrzése folyamatban! 3%`);
          msg.edit(`:stopwatch: Szerver ellenőrzése folyamatban! 5%`);
          msg.edit(`:stopwatch: Szerver ellenőrzése folyamatban! 15%`);
          msg.edit(`:stopwatch: Szerver ellenőrzése folyamatban! 25%`);
          msg.edit(`:stopwatch: Szerver ellenőrzése folyamatban! 34%`);
          msg.edit(`:stopwatch: Szerver ellenőrzése folyamatban! 45%`);
          msg.edit(`:stopwatch: Szerver ellenőrzése folyamatban! 56%`);
          msg.edit(`:stopwatch: Szerver ellenőrzése folyamatban! 67%`);
          msg.edit(`:stopwatch: Szerver ellenőrzése folyamatban! 78%`);
          msg.edit(`:stopwatch: Szerver ellenőrzése folyamatban! 96%`);
          msg.edit(`:stopwatch: Szerver ellenőrzése folyamatban! 98%`);
          msg.edit(`:stopwatch: Szerver ellenőrzése folyamatban! 100%`);
          msg.edit(`:x: Nincsen szervered **DinoHost**-től!`);
        });
    }
};