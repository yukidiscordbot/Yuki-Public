const Discord = require("discord.js");
module.exports = class {
    constructor() {
        this.help = {
            category: ":checkered_flag: Speciális",
            description: "Szerverhez való csatlakozás."
        };
    }

    run(client, message, args) {
if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: **Uyarı** :warning:', '`unban` **Adlı Komutu Özel Mesajlarda Kullanamazsın.** ')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  client.unbanReason = reason;
  client.unbanAuth = message.author;
  let user = args[0];
  let modlog = guild.channels.find("name", "mod-logs", "log", "mod-log", "logs");//mod-log channel name. change for you
  if (!modlog) return message.reply('`mod-log` channel is not found, please add an channel.');//don't find mod-log channel.
  if (!user) return message.reply('**Please give me an** **__@USER__** **mention to unban.**').catch(console.error);
  message.guild.unban(user);
  if (reason.length < 1) return message.reply('**No given reason.**');//don't forget unban reason

  const embed = new Discord.RichEmbed()
    .setColor("GREEN")
    .setAuthor(' Action | Unban', `https://mgzcraft.weebly.com/uploads/2/3/7/9/23791676/published/unban-button.png?250`)
    .addField('Moderator', `${message.author.username}#${message.author.discriminator}`)    
    .addField('User', `${user.username}#${user.discriminator}`)
    .addField('Reason', reason)
    .setTimestamp();
  return guild.channels.get(modlog.id).sendEmbed(embed);
}
}