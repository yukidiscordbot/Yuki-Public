const exec = require('child_process').exec;
const Discord = require('discord.js');
module.exports = class {
    constructor() {
        this.help = {
            category: ":warning: Tulajdonos számára:",
            usage: "<kód>",
            description: "Bot tulajdonosnak csak!"
        };

        this.ownerOnly = true;
    }

    run(bot, message, args, color, prefix) {
              console.log(`\n${message.author.username}#${message.author.discriminator} Used y!eval Command On ${message.guild.name}`)
          if (message.author.id !== "440475713523417088" && message.author.id !== "440475713523417088") return message.channel.send("Only owners can use this command")
    exec(`${args.join(' ')}`, (error, stdout) => {
      const response = (error || stdout);
          let gayembed = new Discord.RichEmbed()
        .setTimestamp()
        .setColor('GREEN')
        .setTitle(`Execulate Completed`)
        .setDescription(`\`\`\`js\napp@yuki:~ ${args.join(" ")}\n${response}\n\`\`\``)
    return message.channel.send(gayembed);
    });
};
}