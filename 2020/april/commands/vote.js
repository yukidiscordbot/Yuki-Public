const Discord = require("discord.js");
const botconfig = require("../config.json");

module.exports = class {
    constructor() {
        this.help = {
            category: "Other",
            description: "If you wanna vote? Just vote here anyway."
        };
    }

    async run (bot, message, args, ops) {
      	if (!message.member.roles.find("name", "@everyone")) { //Whatever role you want, I pick @everyone because everyone can use this command
		message.channel.send('Invalid permissions.');
		return;
	}
    
    // Check for input
    if (!args[0]) return message.channel.send('<:error:543851339713609745> You didn\'t provide any message to start voting you need to make sure you are using the right syntax: `y!vote <yourmessage>`.');
    
    // Create Embed
    const embed = new Discord.RichEmbed()
        .setColor("#36393F") //To change color do .setcolor("#fffff")
    .setFooter(`© Yuki V5.3.1`, "https://cdn.discordapp.com/avatars/489219428358160385/19ad8d8c2fefd03fa0e1a2e49a2915c4.png")
        .setTimestamp()
        .setDescription(args.join(' '))
        .setTitle(`Vote now!`);
        
    let msg = await message.channel.send(embed)
        .then(function (msg) {
            msg.react("✔️");
            msg.react("❌");
            message.delete({timeout: 1000});
            }).catch(function(error) {
            console.log(error);
        });
}
}