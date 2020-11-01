const snekfetch = require('snekfetch');
const Discord = require('discord.js');
let cooldown = new Set();
let cdseconds = 5;
module.exports = class {
    constructor() {
        this.help = {
            category: "User",
            description: "The user have access to test the bot error event."
        };
    }

  run(client, m, args) {
const newemb = new Discord.RichEmbed()
      .setTitle("<:error:543851339713609745> Command Error")
      .setDescription(`(node:13056) UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 1): ReferenceError: errortest is not defined`)
      .setColor(`f01d0e`)
      m.channel.send({embed: newemb})
    };
    }