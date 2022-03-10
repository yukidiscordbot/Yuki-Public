const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  message.channel.send('Testing')
}

exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: true, //no dm support
  permLevels: 'User'
};

exports.help = {
    name: 'test',
    category: 'Test',
    description: 'An example command, to start your advertures with.',
    usage: 'test'
};
