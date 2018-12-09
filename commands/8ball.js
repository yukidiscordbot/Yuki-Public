const Discord = require("discord.js");
const botconfig = require("../config.json");

module.exports = class {
    constructor() {
        this.help = {
            category: ":checkered_flag: Speciális",
            description: "Egy felhasználónak beállítja hogy ne zavarják!"
        };
    }

    async run (bot, message, args) {
          if (!args[2]) return message.reply("Please ask a full question!");
    let replies = ["Yes, Certainly :8ball:", "No, Never :8ball:", "Please ask again :8ball:", "Maybe. :8ball:"]
    let result = Math.floor((Math.random() * replies.length));

    let question = args.slice().join(" ");

    let embedz = new Discord.RichEmbed()
        .setAuthor(message.author.username + " asks: " + question)
        .setColor("#D3D3D3")
        .addField("Answer", "Asked by " + message.author.tag + "\nAnswer: " + replies[result] + "")

    message.channel.send(embedz)
}
}
