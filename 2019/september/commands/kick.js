const Discord = require('discord.js');

module.exports = class {
    constructor() {
        this.help = {
              category: "Moderation",
            description: "Kicks a user.",
          usage: "<user> <reason>"
        };
    }

    async run(bot, message, args) {
      let embed = new Discord.RichEmbed()
      .setTitle(`<:error:543851339713609745> Permission Error`)
      .setDescription('You need a `KICK_MEMBERS` permission to use this command.')
      .setColor(`f01d0e`)
          if (!message.member.hasPermissions ('KICK_MEMBERS')) return message.channel.send(embed)
          let logs = message.guild.channels.find("name", "mod-logs");
  if(!logs) return message.channel.send("<:error:543851339713609745> You need an \`mod-logs\` channel.");
      let user = message.mentions.users.first();
  if(!user) return message.channel.send("<:error:543851339713609745> Please mention a user!");
    let reason = args.slice(1).join(' ');
    if (!reason) reason = "No reason!";

  let logsEmbed = new Discord.RichEmbed() // Master is MessageEmbed
        .setAuthor(' Action | Kick', `http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-ban-icon.png`)
        .setColor("RED")
        .setTimestamp()
        .addField("User", `${user}`)
        .addField("Moderator", `${message.author}`)
        .addField("Reason", reason)
     .setFooter(`© Yuki Old V4.35`, "https://cdn.discordapp.com/avatars/562357309548920840/0df609e7bd5aadad66701a3bcf4570ee.png?size=2048")
    message.guild.member(user).kick(reason);
    message.delete();
    logs.send(logsEmbed);

}

}