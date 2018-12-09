const Discord = require("discord.js");
module.exports = class {
    constructor() {
        this.help = {
            category: ":checkered_flag: Speciális",
            description: "Szerverhez való csatlakozás."
        };
    }

    async run(bot, message, args) {
        message.delete();
    let role = message.guild.roles.find(role => role.name === 'Verified');
    if (message.channel.name !== 'verify') return message.reply("The command missing some materials: ':tools: :x: **Setup Failure** You need to create an **``#verify``** channel!'");
    message.member.addRole(role);
    if (message.member.roles.has(role.id)) {
    let delrole = message.guild.roles.find(`name`, "Unverified");
    await (delrole.removeRole(delrole.id));
        let verifyEmbed = new Discord.RichEmbed()
			      .setAuthor('An error occurred under the verification', message.author.displayAvatarURL)
            .setThumbnail('https://thewindowsclub-thewindowsclubco.netdna-ssl.com/wp-content/uploads/2016/04/windows-update-error.png')
            .setColor('0xCC0000')
            .setTimestamp()
            .setDescription('Your account is already verified!')
        return message.channel.send((verifyEmbed));
    } else {
        let verifyEmbed = new Discord.RichEmbed()
            .setAuthor('You have been verified', message.author.displayAvatarURL)
            .setThumbnail('https://gramers.pro/wp-content/uploads/2017/12/1495368559287.png')
            .setColor('0x00FF00')
            .setTimestamp()
            .setDescription('Your account has been successfully verified.')
        return message.channel.send((verifyEmbed));
    }
}
}