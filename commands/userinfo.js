const Discord = require('discord.js');
const commando = require('discord.js-commando');
const moment = require("moment");
module.exports = class {
    constructor() {
        this.help = {
            category: ":checkered_flag: Speciális",
            description: "Egy felhasználónak beállítja hogy ne zavarják!"
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
		.setColor('RANDOM')
		.setThumbnail(user.avatarURL)
		.setTitle(`${user.username}#${user.discriminator}`)
		.addField("User ID:", `${user.id}`, true)
		.addField("Nickname(s):", `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
		.addField("User Created at:", `${moment.utc(user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
		.addField("Joined Server:", `${moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
		.addField("Bot User:", `${user.bot}`, true)
		.addField("Status:", `${user.presence.status}`, true)
		.addField("Playing", `${user.presence.game ? user.presence.game.name : 'nothing'}`, true)
		.addField("Roles:", member.roles.map(roles => `${roles.name}`).join(', '), true)
    .setFooter("© Yuki V4.2.5", "https://data.whicdn.com/images/307645312/large.jpg?t=1519144430")
     message.channel.send({embed});
    }
};