const Discord = require("discord.js")
module.exports = class {
    constructor() {
        this.help = {
            category: ":checkered_flag: Speciális",
            description: "Egy felhasználónak beállítja hogy ne zavarják!"
        };
    }

    async run(client, member, message) {
    let role = member.guild.roles.find("name", "Member");
      let rol2 = member.guild.roles.find("name", "User");
      let ro3 = member.guild.roles.find("name", "Unverified");
      let ro4 = member.guild.roles.find("name", "Tag");
    member.addRole(role).catch(console.error);
      member.addRole(rol2).catch(console.error);
      member.addRole(ro3).catch(console.error);
       member.addRole(ro4).catch(console.error);
    const welcomeChannel = member.guild.channels.find('name', 'welcome');
  if (welcomeChannel) {
     let WelcomeEmbed = new Discord.RichEmbed()
    .setTitle("<a:blobjoining:511274840586453046> <:join:560100357657591808> Joined Member")
    .setThumbnail(member.user.displayAvatarURL)
    .setDescription(`Welcome ${member.user} to ${member.guild.name}!`)
    .setColor("BLUE")
    .setFooter(`You are the ${member.guild.memberCount} member!`)
    welcomeChannel.send(WelcomeEmbed)
  } 
}
}