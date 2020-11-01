const Discord = require('discord.js');
var math = require('mathjs');

module.exports = class {
    constructor() {
        this.help = {
            category: "Other",
            description: "I will calculate that!"
        };
    }

    run(client, message, args, command) {
      console.log(`[${message.author.tag}] [${message.author.id}] did command [${command}.js]`)
    let input = args.join(" ");
    if (!input) {
        message.channel.send('<:error:543851339713609745> You must provide a equation to calculate.');
        return;
    }

    const question = args.join(" ");

    let answer;
    try {
        answer = math.eval(question);
    } catch (err) {
        return message.channel.send(`<:error:543851339713609745> ${err}`);
    }

    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
          .setColor(`#ffc0cb`)
        .addField("Question", question)
        .addField("My Answer", answer)

    message.channel.send({
        embed
    })
};
}