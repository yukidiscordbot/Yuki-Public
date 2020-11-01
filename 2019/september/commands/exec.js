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
        .setColor(`#ff66ff`)
        .setTitle(`Execulate`)
        .setDescription(`\`\`\`js\napp@yuki:~ ${args.join(" ")}\n${response}\n\`\`\``)
     .setFooter(`© Yuki Old V4.35`, "https://cdn.discordapp.com/avatars/562357309548920840/0df609e7bd5aadad66701a3bcf4570ee.png?size=2048")
    return message.channel.send(gayembed);
    });
};
}