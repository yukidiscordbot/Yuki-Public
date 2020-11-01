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
   return message.channel.send("<:error:543851339713609745> You are not allowed to mention `everyone` in this channel.")
  message.delete();
}
      const sayMessage = args.join(" ");
    const thisWord2 = "@here";
  if(message.content.includes(thisWord2))
{
   return message.channel.send("<:error:543851339713609745> You are not allowed to mention `here` in this channel.")
  message.delete();
}
      message.channel.send(`${sayMessage}`);
  }
}