const Discord = require('discord.js');

module.exports = class {
    constructor() {
        this.help = {
            category: "Moderation",
            description: "Bans a user."
        };
    }

    async run(client, message, args) {
            let embed = new Discord.RichEmbed()
      .setTitle(`<:error:543851339713609745> Permission Error`)
      .setDescription('You need a `BAN_MEMBERS` permission to use this command.')
      .setColor(`f01d0e`)
    if (!message.member.hasPermissions ('BAN_MEMBERS')) return message.channel.send(embed)
    let logs = message.guild.channels.find("name", "mod-logs");
  if(!logs) return message.channel.send("<:error:543851339713609745> You need an \`mod-logs\` channel.");

  let user = message.mentions.users.first();
  if(!user) return message.channel.send("<:error:543851339713609745> Please mention a user!");
    let reason = args.slice(1).join(' ');
    if (!reason) reason = "No reason!";

  message.guild.member(user).ban(reason);

  let logsEmbed = new Discord.RichEmbed() // Master is MessageEmbed
  .setAuthor(' Action | Ban', `http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-ban-icon.png`)
  .setColor("RED")
  .setTimestamp()
  .addField("User", `${user}`)
  .addField("Moderator", `${message.author}`)
  .addField("Reason", reason)
  .setFooter(`© Yuki V5.2.1`, "https://cdn.discordapp.com/avatars/489219428358160385/0df609e7bd5aadad66701a3bcf4570ee.png")

  logs.send(logsEmbed);
}
}