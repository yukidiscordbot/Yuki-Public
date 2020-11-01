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
    if (!args[0]) return message.channel.send("<:error:543851339713609745> You need to provide a question to get answer.");
    let question = args.slice().join(" ");
    let replies = ['It is certain.', 'My reply is no.', 'Ask again later.', 'Reply hazy, try again.', 'My sources say no.', 'Outlook not so good.', 'Very doubtful.', 'Better not tell you now.', 'Reply hazy, try again', 'Cannot predict now.', 'Yes.', 'Concentrate and ask again', 'Outlook good.', 'As I see it, yes.', 'Most likely.', 'Signs point to yes.', 'It is decidedly so.', 'Without a doubt.', 'Yes - definitely.', 'You may rely on it.', 'Don\'t count on it.'];
    let result = Math.floor((Math.random() * replies.length));

    let newembed = new Discord.RichEmbed()
    .addField("Question", `${question}`)
      .addField("Asked by", `${message.author.username}#${message.author.discriminator}`)
      .addField("Answer", `${replies[result]}`)
    .setColor(`#ed09a9`)
    message.delete().catch(O_o => {});
    message.channel.send({
        embed: newembed
    })
}
}