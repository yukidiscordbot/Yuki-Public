const Discord = require('discord.js');

module.exports = class {
    constructor() {
        this.help = {
            category: "Moderation",
            description: "Warns a user with a reason.",
          usage: "<user> <reason>"
        };
    }

    async run(bot, message, args) {
          if (!message.member.hasPermissions ('MANAGE_GUILD')) return message.channel.send("<:error:543851339713609745> You need **Manage Server** permissions for use this command.")
          let logs = message.guild.channels.find("name", "mod-logs");
  if(!logs) return message.channel.send("<:error:543851339713609745> You need an mod-logs channel.");

    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!user) return message.channel.send("<:error:543851339713609745> The provided user is not found!")
    let reason = args.slice(1).join(' ');
    if (!reason) reason = "No reason!";

  let logsEmbed = new Discord.RichEmbed() // Master is MessageEmbed
        .setAuthor(' Action | Warn', `https://www.materialui.co/materialIcons/alert/warning_amber_384x384.png`)
        .setColor("RED")
        .setTimestamp()
        .addField("User", `${user}`)
        .addField("Moderator", `${message.author}`)
        .addField("Reason", reason)
     .setFooter(`© Yuki Old V4.35`, "https://cdn.discordapp.com/avatars/562357309548920840/0df609e7bd5aadad66701a3bcf4570ee.png?size=2048")
        .setTimestamp();
      let embed = new Discord.RichEmbed()
      .setTitle(`You have been warned!`)
      .setColor("RED")
      .setTimestamp
      .addField("Moderator", `${message.author}`)
      .addField("Reason", reason)
     .setFooter(`© Yuki Old V4.35`, "https://cdn.discordapp.com/avatars/562357309548920840/0df609e7bd5aadad66701a3bcf4570ee.png?size=2048")
user.send(embed)
    message.delete();
    logs.send(logsEmbed);

}

}