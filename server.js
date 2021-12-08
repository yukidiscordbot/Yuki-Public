const NODE_MAJOR_VERSION = process.versions.node.split('.')[0];
 if (NODE_MAJOR_VERSION < 16) {
  throw new Error(`Your node version ${process.versions.node.split('.')[0]} is outdated, please upgrade it to node V16.6!`);
  process.exit(1);
}
require('dotenv').config()

const Discord = require('discord.js')
const Enmap = require('enmap')
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const { Client, Intents } = require('discord.js');
const client = new Client({ disableEveryone: true, disabledEvents: ["TYPING_START"], intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

//Enmap Database Generation
client.points = new Enmap({ name: 'points' })
client.inventory = new Enmap({ name: 'inventory' })
client.money = new Enmap({ name: 'money' })
client.bank = new Enmap({ name: 'bank' })
client.cooldown = new Enmap({ name: 'cooldown' })
client.rep = new Enmap({ name: 'rep' })
client.settings = new Enmap({ name: 'settings' })
client.warns = new Enmap({ name: 'warns' })
client.life = new Enmap({ name: 'life' })
client.tags = new Enmap({ name: 'tags' })
client.uses = new Enmap({ name: 'uses' })
client.commands = new Discord.Collection()
client.aliases = new Discord.Collection()
client.music = {}
client.levelCache = {}

client.config = require('./config')
require('./modules/handlers/command')(client)
require('./modules/handlers/event')(client)
require('./modules/music')(client)

//logical todo use 0,1 instead false, true
if(client.config.musicEnabled === '1') {
client.queue = new Map();

client.Youtube = new Youtube('youtube-key');
client.ytdl = ytdl;

}

for (let i = 0; i < client.config.permLevels.length; i++) {
    let currentlevel = client.config.permLevels[i]
    client.levelCache[currentlevel.name] = currentlevel.level
}

client.login('REPLACEMEHERE').catch(console.error);
