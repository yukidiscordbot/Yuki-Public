const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../config.json');
const randomizeCase = word => word.split('').map(c => Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()).join('');
module.exports = class {
    constructor() {
        this.help = {
            category: "Fun",
            description: "Your message is now emojify!",
          usage: "<message>"
        };
    }

    run(bot, message, args) {
      const mapping = {
    ' ': '   ',
    '0': ':zero:',
    '1': ':one:',
    '2': ':two:',
    '3': ':three:',
    '4': ':four:',
    '5': ':five:',
    '6': ':six:',
    '7': ':seven:',
    '8': ':eight:',
    '9': ':nine:',
    '!': ':grey_exclamation:',
    '?': ':grey_question:',
    '#': ':hash:',
    '*': ':asterisk:'
};

'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
    mapping[c] = mapping[c.toUpperCase()] = ` :regional_indicator_${c}:`;
});

    if (args.length < 1) {
        return message.channel.send(`<:error:543851339713609745> Specify a text to make it in char emojis.`)
    }

    message.channel.send(
        args.join(' ')
            .split('')
            .map(c => mapping[c] || c)
            .join('')
    );
};

};