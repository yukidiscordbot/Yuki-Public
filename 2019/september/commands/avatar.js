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
           .setColor("GREEN")
           .setImage(`${message.author.displayAvatarURL}`)
           .setDescription(`[Click Here to see the full image](${message.author.displayAvatarURL})`)
     .setFooter(`© Yuki Old V4.35`, "https://cdn.discordapp.com/avatars/562357309548920840/0df609e7bd5aadad66701a3bcf4570ee.png?size=2048")
           return message.channel.send(embed)
        }
        let user = message.mentions.users.first(); // Mentioned user
        let image = user.displayAvatarURL; // Get image URL
        let embed = new Discord.RichEmbed()
            .setAuthor(`${user.username}#${user.discriminator}'s avatar`) // Set author
       .setDescription(`[Click Here to see the full image](${user.avatarURL})`)
            .setColor("GREEN") // Set color (If you don't have ideas or preference, use RANDOM for random colors)
            .setImage(image)
     .setFooter(`© Yuki Old V4.35`, "https://cdn.discordapp.com/avatars/562357309548920840/0df609e7bd5aadad66701a3bcf4570ee.png?size=2048")
            .setTimestamp()
        message.channel.send(embed); // Send embed
    }
}