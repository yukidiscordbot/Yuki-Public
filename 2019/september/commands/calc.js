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
        message.channel.send('You must provide a equation to calculate.');
        return;
    }

    const question = args.join(" ");

    let answer;
    try {
        answer = math.eval(question);
    } catch (err) {
        return message.channel.send(`${err}`);
    }

    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
        .setColor(`GREEN`)
        .addField("Question", question)
        .addField("My Answer", answer)
     .setFooter(`© Yuki V5.2.1`, "https://cdn.discordapp.com/avatars/489219428358160385/0df609e7bd5aadad66701a3bcf4570ee.png")

    message.channel.send({
        embed
    })
};
}