const { RichEmbed } = require('discord.js'), 
      { get } = require('node-superfetch');
const Discord = require('discord.js');
module.exports = class {
    constructor() {
        this.help = {
            category: ":white_check_mark: Felhasználó", // Ezt átírhatod!
            description: "Random mém!" // Ezt átírhatod!
        };
    }

    async run(client, message, args, color) {
  let nickname = args.join(' ')
  message.guild.members.get('489219428358160385')
  	.setNickname(nickname)
  const newemb = new Discord.RichEmbed()
.setTitle("My new nickname set!")
.setColor("RANDOM")
.setThumbnail('https://data.whicdn.com/images/307645312/large.jpg?t=1519144430')
.addField('Bot Nickname', nickname)
.setFooter("© Yuki V4.2.7", "https://data.whicdn.com/images/307645312/large.jpg?t=1519144430")
.setTimestamp()
message.channel.send({embed: newemb})
}
}