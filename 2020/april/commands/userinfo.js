const Discord = require('discord.js');
const moment = require("moment");
module.exports = class {
    constructor() {
        this.help = {
            category: "Information",
            description: "Shows a user informations",
          usage: "<Mention>"
        };
    }

    async run(client, message, args) {
	let user;
	// If the user mentions someone, display their stats. If they just run userinfo without mentions, it will show their own stats.
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }
	// Define the member of a guild.
    const member = message.guild.member(user);
	
	//Discord rich embed
      if (!message.mentions.users.size) {
    const embed = new Discord.RichEmbed()
              .setColor(`#d91414`)
		.setThumbnail(user.avatarURL)
		.setTitle(`${user.username}#${user.discriminator}`)
		.addField("ID", `${user.id}`, true)
		.addField("Nicknames", `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
		.addField("Created at", `${moment.utc(user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
		.addField("Joined at", `${moment.utc(user.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
    .addField("Account Type", `${user.bot ? '\nBot' : 'User'}`, true)
		.addField("Status", `${user.presence.status}`, true)
		.addField("Playing", `${user.presence.game ? user.presence.game.name : 'None'}`, true)
		.addField("Roles", member.roles.map(roles => `${roles.name}`).join(', '), true)
        .setFooter(`© Yuki V5.3.1`, "https://cdn.discordapp.com/avatars/489219428358160385/19ad8d8c2fefd03fa0e1a2e49a2915c4.png")
     return message.channel.send({embed});
      }
        let image = user.displayAvatarURL; // Get image URL
    const embed = new Discord.RichEmbed()
              .setColor(`#d91414`)
		.setThumbnail(user.avatarURL)
		.setTitle(`${user.username}#${user.discriminator}`)
		.addField("ID", `${user.id}`, true)
		.addField("Nicknames", `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
		.addField("Created at", `${moment.utc(user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
		.addField("Joined at", `${moment.utc(user.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
        .addField("Account Type", `${user.bot ? '\nBot' : 'User'}`, true)
		.addField("Status", `${user.presence.status}`, true)
		.addField("Playing", `${user.presence.game ? user.presence.game.name : 'None'}`, true)
		.addField("Roles", member.roles.map(roles => `${roles.name}`).join(', '), true)
        .setFooter(`© Yuki V5.3.1`, "https://cdn.discordapp.com/avatars/489219428358160385/19ad8d8c2fefd03fa0e1a2e49a2915c4.png")
        message.channel.send(embed); // Send embed
    }
}