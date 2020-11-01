const Discord = require("discord.js");

module.exports = class {
    constructor() {
        this.help = {
            category: "Moderation",
            description: "The bot will remove some messages.",
          usage: "<number>"
        };
    }

    async run (bot, message, args, messages) {
            let embed = new Discord.RichEmbed()
      .setTitle(`<:error:543851339713609745> Permission Error`)
      .setDescription('You need a `MANAGE_MESSAGES` permission to use this command.')
      .setColor(`f01d0e`)
  const deleteCount = parseInt(args[0], 10);
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(embed);
        if (!args[0] || args[0 == "help"]) return message.channel.send("<:error:543851339713609745> You need to provide an number to purge messages.");
    
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.channel.send(":warning: 2 or 100 is the limit the bot can delete.");
   
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.channel.send(`${error}`));
  message.delete
  message.channel.send(`<:success:543851339696963584> **${args[0]}** messages is now removed.`);
  }
}