const Discord = require("discord.js");
module.exports = class {
    constructor() {
        this.help = {
            category: "Moderation",
            description: "Adds a role from a member, no mention needed.",
           usage: "@User RoleWithoutMention"
        };
    }

    async run(bot, message, args) {
      
  //!addrole @andrew Dog Person
      let embed = new Discord.RichEmbed()
      .setTitle(`<:error:543851339713609745> Permission Error`)
      .setDescription('You need a `MANAGE_ROLES` permission to use this command.')
      .setColor(`f01d0e`)
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(embed);
  if(args[0] == "help"){
    message.channel.send("Usage: y!addrole <user> <role>");
    return;
  }
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.channel.send("<:error:543851339713609745> I couldn't find that user!");
  let role = args.join(" ").slice(22);
  if(!role) return message.channel.send("<:error:543851339713609745> Please specify a role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.channel.send("<:error:543851339713609745> I couldn't find that role.");

  if(rMember.roles.has(gRole.id)) return message.channel.send("<:error:543851339713609745>  They already have that role!");
  await(rMember.addRole(gRole.id));

  try{
        await rMember.send(`<:success:543851339696963584> Now you have the ${gRole.name} role!`)
    await message.channel.send(`<:success:543851339696963584> Added role ${gRole.name} to <@${rMember.id}>!`)
  }catch(e){
    console.log(e.stack);
    message.channel.send(`<:error:543851339713609745> Rule was added to <@${rMember.id}>, but his DM are locked, so i can't send the message.`)
  }
}
}