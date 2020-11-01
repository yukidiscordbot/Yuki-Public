require('./bot.js');

const https = require('https');
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send());

app.listen(process.env.PORT);

setInterval(() => https.get(`https://${process.env.PROJECT_DOMAIN}.glitch.me/`), 60000);