/* Phising Test */
// This will doesn't gonna work...yet, this is why it's not in production.
const fs = require('fs')
const Discord = require('discord.js')
const config = require("../config.json");
module.exports = (client, message) => {
  const settings = client.getSettings(message.guild.id)
  let level = client.permlevels(message, client)
  
  if (client.getSettings(message.guild.id).noPhishing === "1") {
  if(config.phish.some(word => message.content.toLowerCase().includes(word))){
    }
  }
}
