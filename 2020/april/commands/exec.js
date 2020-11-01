const exec = require('child_process').exec;
const Discord = require('discord.js');
module.exports = class {
    constructor() {
        this.help = {
            category: "Bot Owner",
            usage: "<code>",
            description: "The bot will execuate that, only for the bot owner."
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
        .setColor(`#d91414`)
        .setTitle(`Execulate`)
        .setDescription(`\`\`\`js\nroot@yuki:~ ${args.join(" ")}\n${response}\n\`\`\``)
.setFooter(`© Yuki V5.3.1`, "https://cdn.discordapp.com/avatars/489219428358160385/19ad8d8c2fefd03fa0e1a2e49a2915c4.png")
    return message.channel.send(gayembed);
    });
};
}