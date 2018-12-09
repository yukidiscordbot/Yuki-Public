const Discord = require("discord.js");
module.exports = class {
async run(client, message) {
    const logs = message.guild.channels.find('name', 'logs');
    if (message.guild.me.hasPermission('MANAGE_CHANNELS') && !logs) {
        await message.guild.createChannel('logs', 'text');
    }
    if (!logs) {
        return console.log('The logs channel does not exist and cannot be created')
    }
    const entry = await message.guild.fetchAuditLogs({
        type: 'MESSAGE_DELETE'
    }).then(audit => audit.entries.first())
    let user;
    if (message.channel.id && (entry.target.id === message.author.id) && (entry.createdTimestamp > (Date.now() - 5000)) && (entry.extra.count >= 1)) {
        user = entry.executor.username
    } else {
        user = message.author
    }
    const logembed = new Discord.RichEmbed()
        .setTitle('A Message Deleted')
        .setAuthor(user.tag, message.author.displayAvatarURL)
        .addField(`**Message sent by ${message.author.username} deleted in ${message.channel.name}**!\n\n`, message.content)
        .setColor("RANDOM")
        .setFooter(`Channel ID: #${message.channel.id}`)
        .setTimestamp()
    logs.send(logembed);
}
}