const Discord = require("discord.js");

module.exports = class {
    constructor() {
        this.help = {
            category: "Fun",
            description: "Force the bot to say that!",
          usage: "<message>"
        };
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
    message.channel.send("Autoblocking mention pings.")
}

      message.channel.send(`${sayMessage}`);
  }
}