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
        .setColor("BLUE") //To change color do .setcolor("#fffff")
     .setFooter(`© Yuki Old V4.35`, "https://cdn.discordapp.com/avatars/562357309548920840/0df609e7bd5aadad66701a3bcf4570ee.png?size=2048")
        .setTimestamp()
        .setDescription(args.join(' '))
        .setTitle(`Vote now!`);
        
    let msg = await message.channel.send(embed)
        .then(function (msg) {
            msg.react("👍");
            msg.react("👎");
            message.delete({timeout: 1000});
            }).catch(function(error) {
            console.log(error);
        });
}
}