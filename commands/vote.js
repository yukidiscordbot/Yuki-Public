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
      	if (!message.member.roles.find("name", "@everyone")) { //Whatever role you want, I pick @everyone because everyone can use this command
		message.channel.send('Invalid permissions.');
		return;
	}
    
    // Check for input
    if (!args[0]) return message.channel.send('Please add a message to vote!');
    
    // Create Embed
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM") //To change color do .setcolor("#fffff")
       .setFooter("© Yuki V4.2.7", "https://data.whicdn.com/images/307645312/large.jpg?t=1519144430")
        .setTimestamp()
        .setDescription(args.join(' '))
        .setTitle(`Voting...`);
        
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