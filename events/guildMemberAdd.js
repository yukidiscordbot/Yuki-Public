const Discord = require("discord.js")
module.exports = class {
    constructor() {
        this.help = {
            category: ":checkered_flag: Speciális",
            description: "Egy felhasználónak beállítja hogy ne zavarják!"
        };
    }

    async run(client, member, message) {
    let role = member.guild.roles.find("name", "Unverified");
    member.addRole(role).catch(console.error);
    const welcomeChannel = member.guild.channels.find('name', 'welcome');
  if (welcomeChannel) {
     let WelcomeEmbed = new Discord.RichEmbed()
    .setAuthor(" A new member joined", "https://cleaa.asn.au/wp-content/uploads/2017/02/CLEAA-join-icon.png")
    .setThumbnail(member.user.displayAvatarURL)
    .setDescription(`Welcome ${member.user} to ${member.guild.name}, \nPlease follow the rules \n and enjoy your stay here!`)
    .setColor("#4286f4")
    .setFooter(`You are the ${member.guild.memberCount} member!`)
    .setTimestamp();
    welcomeChannel.send(WelcomeEmbed)
  } 
}
}