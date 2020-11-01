const Discord = require('discord.js');
const commando = require('discord.js-commando');
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
    const embed = new Discord.RichEmbed()
		.setColor("BLUE")
		.setThumbnail(user.avatarURL)
		.setTitle(`${user.username}#${user.discriminator}`)
		.addField("ID", `${user.id}`, true)
		.addField("Nicknames", `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
		.addField("Created at", `${moment.utc(user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
		.addField("Joined at", `${moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
		.addField("Bot", `${user.bot}`, true)
		.addField("Status", `${user.presence.status}`, true)
		.addField("Playing", `${user.presence.game ? user.presence.game.name : 'Nothing'}`, true)
		.addField("Roles", member.roles.map(roles => `${roles.name}`).join(', '), true)
     .setFooter(`© Yuki V5.2.0`, "https://cdn.discordapp.com/avatars/489219428358160385/c056d11e4e241630cd7b16aa262e48e0.png?size=2048")
     message.channel.send({embed});
    }
};