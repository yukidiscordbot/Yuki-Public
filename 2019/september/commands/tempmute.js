const { RichEmbed } = require('discord.js'), 
      { get } = require('node-superfetch');
const Discord = require("discord.js");
const ms = require("ms");

module.exports = class {
    constructor() {
        this.help = {
            category: "Moderation",
            description: "Tempmutes a user.",
          usage: "<user> <1s/m/h/d>"
        };
    }

    async run(bot, message, args) {
          if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("<:error:543851339713609745> You need an Manage Messages permission!");
    if (args[0] == "help") {
        message.reply("Usage: y!tempmute <user> <1s/m/h/d>");
        return;
    }
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!tomute) return message.channel.send("<:error:543851339713609745> Please mention a user!");
    if (tomute.hasPermission("MANAGE_MESSAGES")) return message.channel.send("<:error:543851339713609745> The member has more permissions then me!");
    const mod = message.author;
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!user) return message.channel.send("<:error:543851339713609745> The provided user is not found!")
   let reason = args.slice(1).join(' ');
    if (!reason) reason = "No reason!";

    let muterole = message.guild.roles.find(`name`, "muted");
    //start of create role
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
    //end of create role
    let mutetime = args[1];
    if (!mutetime) return message.reply("<:error:543851339713609745> Please specitfy a time for the mute.");

    message.delete().catch(O_o => {});

    try {
        await tomute.send(`You have been muted for ${mutetime}.`)
    } catch (e) {
        message.channel.send(`I can't send dm for the member.`)
    }

    let muteembed = new Discord.RichEmbed()
        .setColor("RED")
        .setAuthor(' Action | Tempmute', `https://images-ext-2.discordapp.net/external/Wms63jAyNOxNHtfUpS1EpRAQer2UT0nOsFaWlnDdR3M/https/image.flaticon.com/icons/png/128/148/148757.png`)
        .addField("User", tomute)
        .addField('Moderator', `${message.author.username}#${message.author.discriminator} (${mod})`)    
        .addField("Expires in", mutetime)
            .addField('Reason', `${reason}`)
     .setFooter(`© Yuki V5.2.0`, "https://cdn.discordapp.com/avatars/489219428358160385/c056d11e4e241630cd7b16aa262e48e0.png?size=2048")

    let incidentschannel = message.guild.channels.find(`name`, "mod-logs");
    if (!incidentschannel) return message.channel.send("<:error:543851339713609745> You need to create an mod-logs channel.");
    incidentschannel.send(muteembed);
    message.channel.send(`<@${tomute.id}> is being unmuted in **${mutetime}**!`)
    await (tomute.addRole(muterole.id));

    setTimeout(async function() {
          await tomute.removeRole(muterole.id);
            let muteembed = new Discord.RichEmbed()
          .setAuthor(' Action | Unmute', `https://images-ext-2.discordapp.net/external/wKCsnOcnlBoNk-__BXsd6BrO6YddfUB-MtmaoaMxeHc/https/lh3.googleusercontent.com/Z5yhBQBJTSJVe5veJgaK-9p29hXm7Kv8LKF2oN0hDnsToj4wTcQbirR94XVpH4Lt5a5d%3Dw300`)
        .addField("User", tomute)
              .addField('Moderator', `Yuki#0545 (<@489219428358160385>)`)
        .addField("Reason", "The mute was expired.")
            .setColor("GREEN")
     .setFooter(`© Yuki V5.2.0`, "https://cdn.discordapp.com/avatars/489219428358160385/c056d11e4e241630cd7b16aa262e48e0.png?size=2048")

    let incidentschannel2 = message.guild.channels.find(`name`, "mod-logs");
    if (!incidentschannel2) return message.channel.send("<:error:543851339713609745> You need to create an mod-logs channel.");
    incidentschannel2.send(muteembed);
    }, ms(mutetime));
}
}