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
      .setDescription('You didn\'t have the right permissions to use this command.\nYou need a **Manage Role (MANAGE_ROLES)**, **Adminstrator (ADMINISTRATOR)** to use this command.')
      .setColor(`f01d0e`)
    if(!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send(embed)

    let rMember = message.mentions.members.first() || message.guild.members.find(m => m.user.tag === args[0]) || message.guild.members.get(args[0])
    if(!rMember) return message.channel.send("<:error:543851339713609745> You need to mention somebody.")
    let role = message.guild.roles.find(r => r.name == args[1]) || message.guild.roles.find(r => r.id == args[1]) || message.mentions.roles.first()
    if(!role) return message.channel.send("<:error:543851339713609745> Type the role you wanna add to a member.") 

    if(!message.guild.me.hasPermission(["MANAGE_ROLES"])) return message.channel.send("<:error:543851339713609745> You need to add me a **Manage Role (MANAGE_ROLES)** permission.")

    if(rMember.roles.has(role.id)) {
        return message.channel.send(`<:error:543851339713609745> Already has the typed role.`)
    } else {
        await rMember.addRole(role.id).catch(e => console.log(e.message))
        message.channel.send(`<:success:543851339696963584> **${role.name}** (**${role.id}**) role has been added to **${rMember.displayName}** (**${rMember.id}**).`)
    }
    }
}