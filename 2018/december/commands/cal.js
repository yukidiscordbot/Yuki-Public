const Discord = require('discord.js');
var math = require('mathjs');

module.exports = class {
    constructor() {
        this.help = {
            category: ":checkered_flag: Speciális",
            description: "Egy felhasználónak beállítja hogy ne zavarják!"
        };
    }

    run(bot, message, args, command) {
      console.log(`[${message.author.tag}] [${message.author.id}] did command [${command}.js]`)
    let input = args.join(" ");
    if (!input) {
        message.reply(':x: You must provide a equation to calculate.');
        return;
    }

    const question = args.join(" ");

    let answer;
    try {
        answer = math.eval(question);
    } catch (err) {
        return message.reply(`**Invalid math equation:** ${err}`);
    }

    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
        .setThumbnail("https://images-na.ssl-images-amazon.com/images/I/31QYTepQomL.png")
        .setColor('RANDOM')
        .addField("**Question:**", question, true)
        .addField("**Answer:**", answer)

    message.channel.send({
        embed
    })
};
}