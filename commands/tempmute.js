const { RichEmbed } = require('discord.js'), 
      { get } = require('node-superfetch');
const Discord = require("discord.js");
const ms = require("ms");

module.exports = class {
    constructor() {
        this.help = {
            category: ":white_check_mark: Felhasználó", // Ezt átírhatod!
            description: "Random mém!" // Ezt átírhatod!
        };
    }

    async run(bot, message, args) {
          if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No can do.");
    if (args[0] == "help") {
        message.reply("Usage: y!tempmute <user> <1s/m/h/d>");
        return;
    }
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!tomute) return message.reply("Mention a user.");
    if (tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Je ne peux pas le mute !");
    let reason = args.slice(2).join(" ");
    if (!reason) return message.reply("Given a reason.");

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
    if (!mutetime) return message.reply("Given a time.");

    message.delete().catch(O_o => {});

    try {
        await tomute.send(`You have been muted for ${mutetime}.`)
    } catch (e) {
        message.channel.send(`This user has been muted, but his DMs are disabled, he/she has been muted for ${mutetime}`)
    }

    let muteembed = new Discord.RichEmbed()
        .setColor("RED")
        .setAuthor(' Action | Tempmute', `https://images-ext-2.discordapp.net/external/Wms63jAyNOxNHtfUpS1EpRAQer2UT0nOsFaWlnDdR3M/https/image.flaticon.com/icons/png/128/148/148757.png`)
        .addField("User", tomute)
        .addField("Expire", mutetime)
        .addField("Reason", reason);

    let incidentschannel = message.guild.channels.find(`name`, "mod-logs");
    if (!incidentschannel) return message.reply("You need to create an mod-logs channel.");
    incidentschannel.send(muteembed);
    message.channel.send(`:ok_hand: I <@${tomute.id}> tempmuted ${mutetime}!`)
    await (tomute.addRole(muterole.id));

    setTimeout(function() {
        tomute.removeRole(muterole.id);
        message.channel.send(`<@${tomute.id}> now is unmuted!`);
    }, ms(mutetime));
}
}