const Discord = require("discord.js");
const ms = require("ms");

module.exports = class {
    constructor() {
        this.help = {
              category: "Moderation",
            description: "Mutes a user.",
          usage: "<user> <reason>"
        };
    }

    async run(bot, message, args) {
            let embed = new Discord.RichEmbed()
      .setTitle(`<:error:543851339713609745> Permission Error`)
      .setDescription('You need a `MANAGE_GUILD` permission to use this command.')
      .setColor(`f01d0e`)
          if (!message.member.hasPermissions ('MANAGE_GUILD')) return message.channel.send(embed)
    const modlog = message.guild.channels.find(channel => channel.name === 'mod-logs');
    const mod = message.author;
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!user) return message.channel.send("<:error:543851339713609745> The provided user is not found!")
   let reason = args.slice(1).join(' ');
    if (!reason) reason = "No reason!";
    let muterole = message.guild.roles.find("name", "Muted");
    if(args[0] == "help"){
      message.reply("Usage: dh!mute <user> <reason>");
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

    await (user.addRole(muterole.id));
    const muteembed = new Discord.RichEmbed()
            .setAuthor(' Action | Mute', `https://images-ext-2.discordapp.net/external/Wms63jAyNOxNHtfUpS1EpRAQer2UT0nOsFaWlnDdR3M/https/image.flaticon.com/icons/png/128/148/148757.png`)
            .addField('User', `<@${user.id}>`)
            .addField('Moderator', `${message.author.username}#${message.author.discriminator} (${mod})`)    
            .addField('Reason', `${reason}`)
     .setFooter(`© Yuki Old V4.35`, "https://cdn.discordapp.com/avatars/562357309548920840/0df609e7bd5aadad66701a3bcf4570ee.png?size=2048")
            .setColor("RED")
            .setTimestamp()
        modlog.send(muteembed)
  
  
}
}