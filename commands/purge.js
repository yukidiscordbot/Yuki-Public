const Discord = require("discord.js");

module.exports = class {
    constructor() {
        this.help = {
            category: ":checkered_flag: Speciális",
            description: "Egy felhasználónak beállítja hogy ne zavarják!"
        };
    }

    async run (bot, message, args, messages) {
  const deleteCount = parseInt(args[0], 10);
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You need an ``MANAGE MESSAGES`` permission.");
        if (!args[0] || args[0 == "help"]) return message.reply("syntax: ``dh!purge <number>`` is exited with: 0.");
    
    if(!deleteCount || deleteCount < 1 || deleteCount > 100)
      return message.reply("Please provide a number between ``**1**`` and ``**100**`` for the number of messages to delete.");
   
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  
  let purgeEmbed = new Discord.RichEmbed()
    .setAuthor("♻️ Action | Delete")
    .setColor("RANDOM")
    .addField("Executor", `<@${message.author.id}>`)
    .addField("Deleted Messages", `${args[0]}`)
    .setTimestamp()
  message.delete
  message.channel.send(purgeEmbed);
  }
}