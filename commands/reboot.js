const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

module.exports = class {
    constructor() {
        this.help = {
            category: ":checkered_flag: Speciális",
            description: "Egy felhasználónak beállítja hogy ne zavarják!"
        };
      
      this.ownerOnly = true;
    }

    async run (bot, message) {
if (message.author.id === "440475713523417088") {
  message.channel.send(":gear: Reloading all process...")
  
  bot.destroy()
  bot.login(process.env.TOKEN)
message.channel.send(":gear: Reload has been done!")
} else {
	
message.channel.send("Only the Owner of this bot can do this command.")
  
  }
  }
    }