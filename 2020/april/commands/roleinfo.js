const { RichEmbed } = require('discord.js');

module.exports = class {
    constructor() {
        this.help = {
            category: "Information",
            description: "Shows a role informations.",
          usage: "<rolewithmention>"
        };
    }

   run(client, message, args) {
          // Tries to get the first mentioned role or a role ID or a role name (role names are case sensitive)
    let role = message.mentions.roles.first() || message.guild.roles.get(args[0]) || message.guild.roles.find(role => role.name === args[0]);

    // If we can't find any role, then just default to the author's highest role
    if (!role) role = message.member.highestRole;


    // Define our embed
    const embed = new RichEmbed()
        .setColor(role.hexColor)
    .setTitle(`${role.name}`)
        .addField('Members', role.members.size, true)
        .addField('Hex Color', role.hexColor, true)
        .addField('Role Creation Date', role.createdAt.toDateString(), true)
        .addField('Editable', role.editable.toString(), true)
        .addField('Managed', role.managed.toString(), true)
        .addField('Role ID', role.id, true)
     .setFooter(`© Yuki V5.2.1`, "https://cdn.discordapp.com/avatars/489219428358160385/fc14b31574eca44e2f96808a7d948d04.png")
    return message.channel.send({
        embed: embed
    });
};
}