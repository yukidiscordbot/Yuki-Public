const Discord = require('discord.js');

module.exports = class {
    constructor() {
        this.help = {
            category: "Fun",
            description: "Leak a user pfp."
        };
    }

    run(client, message, args) {
        if (!message.mentions.users.size) {
           let embed = new Discord.RichEmbed()
           .setTitle(`Your Avatar`)
           .setColor(`#ffc0cb`)
           .setImage(`${message.author.displayAvatarURL}`)
           .setDescription(`[2048](${message.author.displayAvatarURL})`)
.setFooter(`© Yuki V5.3.1`, "https://cdn.discordapp.com/avatars/489219428358160385/19ad8d8c2fefd03fa0e1a2e49a2915c4.png")
           return message.channel.send(embed)
        }
        let user = message.mentions.users.first(); // Mentioned user
        let image = user.displayAvatarURL; // Get image URL
        let embed = new Discord.RichEmbed()
            .setAuthor(`${user.username}#${user.discriminator}'s avatar`) // Set author
       .setDescription(`[2048](${user.avatarURL})`)
            .setColor(`#ffc0cb`)
            .setImage(image)
.setFooter(`© Yuki V5.3.1`, "https://cdn.discordapp.com/avatars/489219428358160385/19ad8d8c2fefd03fa0e1a2e49a2915c4.png")
            .setTimestamp()
        message.channel.send(embed); // Send embed
    }
}