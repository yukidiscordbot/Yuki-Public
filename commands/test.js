const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  message.channel.send('Testing')
}

exports.conf = {
  enabled: true,
  aliases: ['cmd-alias'],
  guildOnly: false,
  permLevels: 'User'
};

exports.help = {
    name: 'test',
    category: 'Unknown',
    description: 'Testing command handler.',
    usage: 'test'
};
