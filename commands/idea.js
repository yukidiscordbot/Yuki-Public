const Discord = require("discord.js");
const botconfig = require("../config.json");

module.exports = class {
    constructor() {
        this.help = {
            category: ":checkered_flag: Speciális",
            description: "Egy felhasználónak beállítja hogy ne zavarják!"
        };
    }

    async run (bot, message, args, ops) {
              message.delete();
    if (message.channel.name !== 'idea-logs') return message.channel.send("You need to create an **#idea-logs** channel!");
            	if (!message.member.roles.find("name", "@everyone")) {
		message.channel.send('Invalid permissions.');
		return;
	}
    
    // Check for input
    if (!args[0]) return message.channel.send('Please add a message to share your idea! (Example: command idea)');
    
    // Create Embed
    const embed = new Discord.RichEmbed()
        .setTimestamp()
        .setDescription(args.join(' '))
        .setTitle(`💡 Idea`);
        
    let msg = await message.channel.send(embed)
        .then(function (msg) {
            msg.react("✅");
            msg.react("❌");
            message.delete({timeout: 1000});
            }).catch(function(error) {
            console.log(error);
        });
}
}