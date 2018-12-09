const Discord = require("discord.js");
const ms = require('ms');

module.exports = class {
    constructor() {
        this.help = {
            category: ":checkered_flag: Speciális",
            description: "Egy felhasználónak beállítja hogy ne zavarják!"
        };
    }

    async run (client, message, args, tools) {
if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('Sorry, you don\'t have permission to lockdown or unlock!')
    .then(msg => msg.delete({
        timeout: 10000
    }));
if (!client.lockit) client.lockit = [];
let time = args.join(' ');
let validUnlocks = ['release', 'unlock'];
if (!time) return message.channel.send('You must set a duration for the lockdown in either hour(s), minute(s) or second(s)');

if (validUnlocks.includes(time)) {
    message.channel.updateOverwrite(message.guild.id, {
            SEND_MESSAGES: null
        })
        .then(() => {
            message.channel.send('Lockdown lifted.');
            clearTimeout(client.lockit[message.channel.id]);
            delete client.lockit[message.channel.id];
        })
        .catch(error => {
            console.log(error);
        });
} else {
    message.channel.updateOverwrite(message.guild.id, {
            SEND_MESSAGES: false
        })
        .then(() => {
            message.channel.send(`Channel locked down for ${ms(ms(time), { long:true })}`)
                .then(() => {

                    client.lockit[message.channel.id] = setTimeout(() => {
                        message.channel.updateOverwrite(message.guild.id, {
                                SEND_MESSAGES: null
                            })
                            .then(message.channel.send('Lockdown lifted.'))
                            .catch(console.error);
                        delete client.lockit[message.channel.id];
                    }, ms(time));
                })
                .catch(error => {
                    console.log(error);
                });
        });
}
    }
}