const Discord = require('discord.js');

module.exports = class {
    constructor() {
        this.help = {
            category: ":checkered_flag: Speciális",
            description: "Egy felhasználónak beállítja hogy ne zavarják!"
        };
    }

    async run(client, message, args) {
    if (!message.member.hasPermissions ('BAN_MEMBERS')) return message.channel.send("You need **Ban Members** permissions for use this command.")
    let logs = message.guild.channels.find("name", "mod-logs");
  if(!logs) return message.channel.send("You need to create an mod-log channel.");

  let user = message.mentions.users.first();
  if(!user) return message.reply("Please mention a user");

  let reason = args.join(" ");
  if(!reason) reason = "No reason given";

  message.guild.member(user).ban(reason);

  let logsEmbed = new Discord.RichEmbed() // Master is MessageEmbed
  .setAuthor(' Action | Ban', `http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-ban-icon.png`)
  .setColor("RED")
  .setTimestamp()
  .addField("User", `${user}`)
  .addField("Moderator", `${message.author}`)
  .addField("Reason", reason)

  logs.send(logsEmbed);
}
}