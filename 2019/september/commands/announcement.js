const Discord = require("discord.js");

module.exports = class {
    constructor() {
        this.help = {
            category: "Fun",
            description: "Force the bot to say that!",
          usage: "<message>"
        };
        this.ownerOnly = true;
    }

    async run (bot, message, args) {
        const thisWord = "@everyone";
  if(message.content.includes(thisWord))
{
    bot.sendMessage({
        message: "no u"
    })
}
      const sayMessage = args.join(" ");
    const thisWord2 = "@here";
  if(message.content.includes(thisWord2))
{
    bot.sendMessage({
        message: "no u"
    })
}
      message.delete()
let embed = new Discord.RichEmbed()
.setTitle("" + args.join(" "))
 .setColor('BLUE');
      message.channel.send(embed);
  }
}