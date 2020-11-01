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
     if (message.content.toLowerCase().includes("1s")) return message.channel.send("<:error:543851339713609745> Set an vaild number.")
   
      let reminder = args.slice(1).join(" ");
    if (!reminder) return message.channel.send("<:error:543851339713609745> Specify a reminder.");

      
    let remindEmbed = new Discord.RichEmbed()
        .setColor(`#d91414`)
    .setDescription(`<:success:543851339696963584> Reminder has been set.\n\`${reminder}\``)
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
        .addField("Time left", `\`\`\`${reminderTime}\`\`\``)

        .setTimestamp();

    message.channel.send(remindEmbed);


    setTimeout(function() {
        let remindEmbed = new Discord.RichEmbed()
  .setColor(`#d91414`)
            .setDescription(`<:error:543851339713609745> This reminder is timed out.\n\`${reminder}\``)
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
            .setTimestamp()

        message.channel.send(remindEmbed);
    }, ms(reminderTime));

}
}