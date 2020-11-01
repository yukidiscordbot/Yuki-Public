const snekfetch = require('snekfetch');
const Discord = require('discord.js')
module.exports = class {
    constructor() {
        this.help = {
            category: "Fun",
            description: "That user is now get the achievement!",
          usage: "<message>"
        };
    }

  run(client, message, args) {
 var achievement = args.join(" ");
 var request = require('request');
 var fs = require('fs');
   function isEmpty(obj) {
    if (obj == null) return true;
    if (obj.length > 0)    return false;
    if (obj.length === 0)  return true;
    if (typeof obj !== "object") return true;
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) return false;
    }
    return true;
  }
        if (isEmpty(achievement)) return message.channel.send(`<:error:543851339713609745> No any message was provided!`);
        var download = function(uri, filename, callback){
          request.head(uri, function(err, res, body){
            console.log('content-type:', res.headers['content-type']);
            console.log('content-length:', res.headers['content-length']);
            request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
          });
        };
        var dir = `achievement.png`;
        download('https://www.minecraftskinstealer.com/achievement/a.php?i=13&h=Achievement%20Unlocked&t='+achievement, dir, function(){
        message.channel.send(`${message.author.username} has earned a new achievement [**${achievement}**]`, {file: dir});
        });
  }
}