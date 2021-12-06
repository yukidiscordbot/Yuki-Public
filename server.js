if (process.version < 13) throw new Error('You must upgrade your node version. You need node v13 atleast to run this bot.')
require('dotenv').config()

const Discord = require('discord.js')
const Enmap = require('enmap')
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const client = new Discord.Client();

client.music = {}
client.levelCache = {}

client.config = require('./config.js')
require('./modules/handler/command')(client)
require('./modules/handler/event')(client)
require('./modules/music')(client)

//logical todo use 0,1 instead false, true
if(client.config.musicEnabled === '1') {
client.queue = new Map();

client.Youtube = new Youtube('youtube-key');
client.ytdl = ytdl;

}

for (let i = 0; i < client.config.permLevels.length; i++) {
  const clevel = client.config.permLevels[i]
  client.levelCache[clevel.name] = clevel.level
}

client.login('token').catch(console.error);
