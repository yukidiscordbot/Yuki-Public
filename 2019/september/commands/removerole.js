const Discord = require("discord.js");
module.exports = class {
    constructor() {
        this.help = {
            category: "Moderation",
            description: "Removes a role from a member, no mention needed.",
          usage: "@User RoleWithoutMention"
        };
    }

    async run(client, message, args) {
      let embed = new Discord.RichEmbed()
      .setTitle(`<:error:543851339713609745> Permission Error`)
      .setDescription('You need a `MANAGE_ROLES` permission to use this command.')
      .setColor(`f01d0e`)
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(embed);
  if(args[0] == "help"){
    message.reply("Eample: y!removerole <user> <role>");
    return;
  }
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.channel.send("<:error:543851339713609745> Please mention a user.");
  let role = args.join(" ").slice(22);
  if(!role) return message.channel.send("<:error:543851339713609745> Please give a role.");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.channel.send("<:error:543851339713609745> No any role was found.");

  if(!rMember.roles.has(gRole.id)) return message.reply("<:error:543851339713609745> They already have that role!");
  await(rMember.removeRole(gRole.id));

  try{
            await rMember.send(`<:success:543851339696963584> Your ${gRole.name} role is now removed.`)
        await message.channel.send(`<:success:543851339696963584> Removed ${gRole.name} role from  <@${rMember.id}>`)
  }catch(e){
    message.channel.send(`<:error:543851339713609745> Rule was removed from <@${rMember.id}>, but his DM are locked, so i can't send the message.`)
  }
    }
}