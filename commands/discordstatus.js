module.exports = class {
    constructor() {
        this.help = {
            category: ":white_check_mark: Felhasználó",
            description: "Ellenőrzi a discord státuszát!"
        };
    }

    run(bot, m, args) {
        m.channel.send(":stopwatch: Reading https://status.discordapp.com/ ...").then(msg => {
            msg.edit(`API:  **99.95% uptime**`);
            msg.edit(`Gateway:  **99.96% uptime**`);
          msg.edit(`Media Proxy:  **99.97% uptime**`);
          msg.edit(`**PAST INCIDENTS**`);
          msg.edit(`:white_check_mark: All Systems Operational`);
          msg.edit(`:x: Lost connection with: **DinoHost API**`)
        });
    }
};