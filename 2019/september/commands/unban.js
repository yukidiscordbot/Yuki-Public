const Discord = require("discord.js");
module.exports = class {
    constructor() {
        this.help = {
            category: "Moderation",
            description: "Unbans a user.",
          usage: "<user> <reason>"
        };
    }

    run(client, message, args) {
          if (!message.member.hasPermissions('MANAGE_GUILD')) return message.channel.send("<:error:543851339713609745> You need **Manage Server** permission for use this command!")
    let reason = args.slice(1).join(' ');
    if (!reason) reason = "No reason!";
  client.unbanReason = reason;
  client.unbanAuth = message.author;
      let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!user) return message.channel.send("<:error:543851339713609745> The provided user is not found!")
  let modlog = message.guild.channels.find("name", "mod-logs");//mod-log channel name. change for you
  if (!modlog) return message.channel.send('<:error:543851339713609745> You need an \`mod-logs\` channel.');//don't find mod-log channel.
  if (!user) return message.channel.send('<:error:543851339713609745> You need an \`Member\` to remove their ban.').catch(console.error);
  message.guild.unban(user);
  if (reason.length < 1) return message.reply('No Reason')

  const embed = new Discord.RichEmbed()
    .setColor("GREEN")
    .setAuthor(' Action | Unban', `https://mgzcraft.weebly.com/uploads/2/3/7/9/23791676/published/unban-button.png?250`)
    .addField('Moderator', `${message.author.username}#${message.author.discriminator} (${message.author})`)    
    .addField('User', `${user}`)
    .addField('Reason', reason)
    .setFooter(`© Yuki V5.2.1`, "https://cdn.discordapp.com/avatars/489219428358160385/0df609e7bd5aadad66701a3bcf4570ee.png")
    .setTimestamp();
  return modlog.send(embed)
}
}