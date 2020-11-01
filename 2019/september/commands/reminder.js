const Discord = require('discord.js');
const ms = require("ms");
module.exports = class {
    constructor() {
        this.help = {
            category: "Other",
            description: "Reminds you for something."
        };
    }

    async run(client, message, args) {
          let reminderTime = args[0];
    if (!reminderTime) return message.channel.send("<:error:543851339713609745> You need to specify a time to reminder you.");

    let reminder = args.slice(1).join(" ");

    let remindEmbed = new Discord.RichEmbed()
        .setColor('#ffffff')
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
        .addField("Reminder", `\`\`\`${reminder}\`\`\``)
        .addField("Remaining Time", `\`\`\`${reminderTime}\`\`\``)
     .setFooter(`© Yuki Old V4.35`, "https://cdn.discordapp.com/avatars/562357309548920840/0df609e7bd5aadad66701a3bcf4570ee.png?size=2048")

        .setTimestamp();

    message.channel.send(remindEmbed);


    setTimeout(function() {
        let remindEmbed = new Discord.RichEmbed()
            .setColor('#ffffff')
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
            .addField("Reminder!", `\`\`\`${reminder}\`\`\``)
     .setFooter(`© Yuki V5.2.0`, "https://cdn.discordapp.com/avatars/489219428358160385/c056d11e4e241630cd7b16aa262e48e0.png?size=2048")

            .setTimestamp()

        message.channel.send(remindEmbed);
    }, ms(reminderTime));

}
}