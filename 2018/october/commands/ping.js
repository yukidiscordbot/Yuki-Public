module.exports = class {
    constructor() {
        this.help = {
            category: ":white_check_mark: Felhasználó",
            description: "Ellenőrzőm a pingemet."
        };
    }

    run(bot, m, args) {
        m.channel.send("Pong!").then(msg => {
            msg.edit(`Pong! ${msg.createdTimestamp - m.createdTimestamp}ms round-trip, ${Math.round(bot.client.ping)}ms API heartbeat`);
        });
    }
};