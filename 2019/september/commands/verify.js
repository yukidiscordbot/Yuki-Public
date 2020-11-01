const Discord = require("discord.js");
module.exports = class {
    constructor() {
        this.help = {
            category: "Moderation",
            description: "Verify yourself, as you are not an bot."
        };
    }

    async run(bot, message, args) {
        message.delete();
    let role = message.guild.roles.find(role => role.name === 'Verified');
      let role2 = message.guild.roles.find(role => role.name === 'Unverified');
    if (message.channel.name !== 'verify') return message.reply("<:error:543851339713609745> You need to create an verify channel!");
    message.member.addRole(role);
       message.member.removeRole(role2);
    if (message.member.roles.has(role.id)) {
    let delrole = message.guild.roles.find(`name`, `Unverified`);
    await (delrole.removeRole(delrole.id));
        let verifyEmbed = new Discord.RichEmbed()
			      .setAuthor('An error occurred under the verification', message.author.displayAvatarURL)
     .setFooter(`© Yuki Old V4.35`, "https://cdn.discordapp.com/avatars/562357309548920840/0df609e7bd5aadad66701a3bcf4570ee.png?size=2048")
            .setThumbnail('https://thewindowsclub-thewindowsclubco.netdna-ssl.com/wp-content/uploads/2016/04/windows-update-error.png')
            .setColor('0xCC0000')
            .setTimestamp()
            .setDescription('Your account is already verified!')
        return message.channel.send((verifyEmbed));
    } else {
        let verifyEmbed = new Discord.RichEmbed()
            .setAuthor('Your account is now verified!', message.author.displayAvatarURL)
     .setFooter(`© Yuki Old V4.35`, "https://cdn.discordapp.com/avatars/562357309548920840/0df609e7bd5aadad66701a3bcf4570ee.png?size=2048")
            .setThumbnail('https://gramers.pro/wp-content/uploads/2017/12/1495368559287.png')
            .setColor('0x00FF00')
            .setTimestamp()
            .setDescription('Now your account is verified, you will get the Verified role.')
        return message.channel.send((verifyEmbed));
    }
}
}