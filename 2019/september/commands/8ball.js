const Discord = require("discord.js");
const botconfig = require("../config.json");

module.exports = class {
    constructor() {
        this.help = {
            category: "Fun",
            description: "Ask a question, the bot will respond to you."
        };
    }

    async run (bot, message, args) {
    if (!args[0]) return message.reply("Usage: y!8ball [question]");
    let question = args.slice().join(" ");
    let color = ""
    let replies = ['Yes', 'No', 'Ask again later'];
    let result = Math.floor((Math.random() * replies.length));

    if (replies[result] === 'Yes') color = "#00FF00";
    if (replies[result] === 'No') color = "#FF0000";
    if (replies[result] === 'Ask again later') color = "#0000FF";

    let newembed = new Discord.RichEmbed()
    .addField("Question", `${question}`)
      .addField("Asked by", `${message.author}`)
      .addField("My Answer", `${replies[result]}`)
         .setFooter(`© Yuki V5.2.0`, "https://cdn.discordapp.com/avatars/489219428358160385/c056d11e4e241630cd7b16aa262e48e0.png?size=2048")
    message.delete().catch(O_o => {});
    message.channel.send({
        embed: newembed
    })
}
}