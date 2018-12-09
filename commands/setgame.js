const Discord = require('discord.js');
const config = require('../config.json')

module.exports = class {
    constructor() {
        this.help = {
            category: ":checkered_flag: Speciális",
            description: "Egy felhasználónak beállítja hogy ne zavarják!"
        };
    }

    run(client, message, args) {
        switch(args[0]){
        case 'p': //setting activity to "playing"
        if(message.author.id != '440475713523417088')return message.channel.send('You cant do that')
        client.user.setPresence(args.splice(1).join(' '), {type: 'playing'});
        message.channel.send('**Playing** status ready');
        break;
        case 'w': //setting activity to "watching"
        if(message.author.id != '440475713523417088')return message.channel.send('You cant do that')
        client.user.setPresence(args.splice(1).join(' '), {type: 'watching'});
        message.channel.send('**Watching** status ready')
        break;
        case 'l': //setting activity to "listening"
        if(message.author.id != '440475713523417088')return message.channel.send('You cant do that')
        client.user.setPresence(args.splice(1).join(' '), {type: 'listening'});
        message.channel.send('**Listening** status ready');
        break;
    }
}
}