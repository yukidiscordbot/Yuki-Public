const util = require("util");

module.exports = class {
    constructor() {
        this.help = {
            category: ":white_check_mark: Felhasználó",
            usage: "üzenet",
            description: "Jó parancs nem? :P"
        };
    }
    run(bot, message, args) {
    message.channel.send("" + args.join(" "))}
      }