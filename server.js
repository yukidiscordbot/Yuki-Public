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
const path = require('path');

const client = new CommandoClient({
    commandPrefix: '',
    unknownCommandResponse: false,
    owner: ['440475713523417088'],
    disableEveryone: true
});
client.on('ready', () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
    client.user.setPresence( {
       status: "online",
       game: {
             name: `y!help | ${client.guilds.size} servers | V4.2.7`,
           type: "WATCHING"
       }
   } );
});

client.login('NDg5MjE5NDI4MzU4MTYwMzg1.DuhKkg.VacS25s9_RWdIUETNQ-9zVixwTU')