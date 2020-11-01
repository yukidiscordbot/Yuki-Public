require('./bot.js');

const http = require('http');
const express = require('express');
const app = express();
/*global Set, Map*/
app.use(express.static('public'));

app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
const { CommandoClient, SQLiteProvider } = require('discord.js-commando');
const Discord = require("discord.js");
const config = require("./config.json");
const math = require("mathjs");
const fs = require("fs");
const bot = new CommandoClient({
    commandPrefix: '',
    unknownCommandResponse: false,
    owner: ['ownerid'],
    disableEveryone: true
});
bot.on('ready', function() {
        const blapi = require('blapi')
      const apiKeys = require("./apikeys.json")
blapi.handle(bot, apiKeys, 60);
  const SBL = require("spacebots");
  console.log(`All bot list server count was succesfully posted! :)`)
      setInterval(async () => {
const statuslist = [
`prefix`,
];
const random = Math.floor(Math.random() * statuslist.length);

    try {
      await bot.user.setPresence({
        game: {
          name: `${statuslist[random]}`,
          type: "PLAYING/WATCHING/LISTENING"
        },
        status: "dnd/online/idle/offline"
      });
    } catch (error) {
      console.error(error);
    }
  }, 10000);
});
bot.login('token')