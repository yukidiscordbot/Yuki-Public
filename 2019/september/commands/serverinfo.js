const Discord = require("discord.js");

module.exports = class {
    constructor() {
        this.help = {
            category: "User",
            description: "Shows a server informations.",
        };
    }

    async run(bot, message, args) {
  let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
  let day = message.guild.createdAt.getDate()
  let month = 1 + message.guild.createdAt.getMonth()
  let year = message.guild.createdAt.getFullYear()
   let sicon = message.guild.iconURL;
   let serverembed = new Discord.RichEmbed()
   .setAuthor(message.guild.name, sicon)
     .setFooter(`© Yuki Old V4.35`, "https://cdn.discordapp.com/avatars/562357309548920840/0df609e7bd5aadad66701a3bcf4570ee.png?size=2048")
   .setColor("#7289DA")
   .setThumbnail(sicon)
   .addField("Guild ID", message.guild.id, true)
   .addField("Guild Name", message.guild.name, true)
   .addField("Server Owner", message.guild.owner.user.tag, true)
   .addField("Server Region", message.guild.region, true)
   .addField("Total Channels", message.guild.channels.size, true)
   .addField("Total Members", message.guild.memberCount, true)
   .addField("Total Humans", message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size, true)
   .addField("Total Bots", message.guild.members.filter(m => m.user.bot).size, true)
   .addField("Online", online.size, true)
   .addField("Total Roles", message.guild.roles.size, true)
      .addField('Server Created', `${year}/${month}/${day}`, true)
   message.channel.send(serverembed);

}
}