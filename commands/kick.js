const Discord = require('discord.js');

module.exports = class {
    constructor() {
        this.help = {
            category: ":checkered_flag: Speciális",
            description: "Egy felhasználónak beállítja hogy ne zavarják!"
        };
    }

    async run(bot, message, args, bUser) { 
      
      let breason = args.join(" ").slice(22);
          if (!message.member.hasPermissions ('KICK_MEMBERS')) return message.channel.send("You need **Kick Members** permissions for use this command.")

    let kickEmbed = new Discord.RichEmbed()
        .setAuthor(' Action | Kick', `http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-ban-icon.png`)
        .setColor("RED")
        .setTimestamp()
        .addField("User", `${bUser}`)
        .addField("Moderator", `${message.author}`)
        .addField("Reason", breason)
        .setTimestamp();

    let banchannel = message.guild.channels.find("name", "mod-logs");
    if (!banchannel) return message.channel.send("You need to create an mod-log channel.");

    message.guild.member(bUser).kick(breason);
    message.delete();
    banchannel.send(kickEmbed);

}

}