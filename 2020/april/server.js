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