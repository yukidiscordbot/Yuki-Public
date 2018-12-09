const Discord = require('discord.js');

module.exports = class {
    constructor() {
        this.help = {
            category: ":checkered_flag: Speciális",
            description: "Egy felhasználónak beállítja hogy ne zavarják!"
        };
    }

    run(client, message, args) {
    if (args.join(" ") == "") {
        message.reply("please mention a user to give them avatar pfp.");
        return;
    } else {
        let user = message.mentions.users.first(); // Mentioned user
        let image = user.displayAvatarURL; // Get image URL
        let embed = new Discord.RichEmbed()
            .setAuthor(`${user.username}#${user.discriminator} profile picture`) // Set author
            .setColor("RANDOM") // Set color (If you don't have ideas or preference, use RANDOM for random colors)
            .setImage(image) // Set image in embed
            .setFooter("© Yuki V4.2.5", "https://data.whicdn.com/images/307645312/large.jpg?t=1519144430")
            .setTimestamp()
        message.channel.send(embed); // Send embed
    }
}
}