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
    .setAuthor(" A member is left", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlcIxkzsIqaEeSMT7Sa6Oem2TXfSiOpT7YtQWDCjvGc7j9MOz4Fg")
    .setThumbnail(member.user.displayAvatarURL)
    .setDescription(`Bye-bye ${member.user}, Seeya next time!`)
    .setColor("#4286f4")
    .setFooter(`We now have ${member.guild.memberCount} members!`)
    .setTimestamp();
    byeChannel.send(byeEmbed)
  }
}
}