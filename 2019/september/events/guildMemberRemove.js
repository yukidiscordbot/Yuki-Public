const Discord = require("discord.js")
module.exports = class {
    constructor() {
        this.help = {
            category: ":checkered_flag: Speciális",
            description: "Egy felhasználónak beállítja hogy ne zavarják!"
        };
    }

  run(client, member, message) {
  const byeChannel = member.guild.channels.find('name', 'welcome');
  if (byeChannel) {
    let byeEmbed = new Discord.RichEmbed()
    .setTitle("<a:ablobleaving:511274840649367552> <:leave:560100357103943842> Member Leave")
    .setThumbnail(member.user.displayAvatarURL)
    .setDescription(`Goodbye ${member.user}!`)
    .setColor("RED")
    .setFooter(`We now have ${member.guild.memberCount} members!`)
    byeChannel.send(byeEmbed)
  }
}
}