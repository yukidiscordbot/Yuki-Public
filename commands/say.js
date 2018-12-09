const Discord = require("discord.js");

module.exports = class {
    constructor() {
        this.help = {
            category: ":checkered_flag: Speciális",
            description: "Egy felhasználónak beállítja hogy ne zavarják!"
        };
    }

    async run (bot, message, args) {
      message.delete();
      message.channel.send("" + args.join(" "))}
}