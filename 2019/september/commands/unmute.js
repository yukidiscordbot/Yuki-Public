const Discord = require('discord.js');

module.exports = class {
    constructor() {
        this.help = {
         category: "Moderation",
            description: "Unmutes a user.",
          usage: "<user> <reason>"
        };
    }

    async run(bot, message, args) {
      if (!message.member.hasPermissions ('MANAGE_GUILD')) return message.channel.send("<:error:543851339713609745> You need **Manage Server** permissions for use this command.")
    const modlog = message.guild.channels.find(channel => channel.name === 'mod-logs');
    const mod = message.author;
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!user) return message.channel.send("<:error:543851339713609745> The provided user is not found!")
        let reason = args.slice(1).join(' ');
    if (!reason) reason = "No reason!";
    if (!user.roles.find("name", "Muted")) return message.channel.send('<:error:543851339713609745> This member is not muted yet!')
    let muterole = message.guild.roles.find("name", "Muted");
    if(args[0] == "help"){
      message.reply("<:error:543851339713609745> You need provide an reason, and user to do the action on him.");
      return;
    }
  let muteChannel = message.guild.channels.find("name", "mod-logs");
  if (!muteChannel) return message.channel.send('<:error:543851339713609745> You need an \`mod-logs\` channel.')

    if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "Muted",
                color: "#000000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }
  

    let mutetime = args[1];

    await (user.removeRole(muterole.id));
    const muteembed = new Discord.RichEmbed()
            .setAuthor(' Action | Unmute', `https://images-ext-2.discordapp.net/external/wKCsnOcnlBoNk-__BXsd6BrO6YddfUB-MtmaoaMxeHc/https/lh3.googleusercontent.com/Z5yhBQBJTSJVe5veJgaK-9p29hXm7Kv8LKF2oN0hDnsToj4wTcQbirR94XVpH4Lt5a5d%3Dw300`)
            .addField('User', `<@${user.id}>`)
            .addField('Moderator', `${mod}`)
            .addField('Reason', `${reason}`)
            .setColor("GREEN")
     .setFooter(`© Yuki V5.2.0`, "https://cdn.discordapp.com/avatars/489219428358160385/c056d11e4e241630cd7b16aa262e48e0.png?size=2048")
      		  .setTimestamp()
        modlog.send(muteembed)
  
  
}
}