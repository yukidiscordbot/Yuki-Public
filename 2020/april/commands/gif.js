const Discord = require("discord.js");
const giphy = require('giphy-api')("zX9tUZvzihLOtYweZzVd4uf3TuAZt8bf");
module.exports = class {
    constructor() {
        this.help = {
            category: "Bot Owner",
            usage: "<command>",
            description: "Testing the new help menu."
        };
    }

    run(bot, message, args) {
        if (args.length === 0) {
    message.channel.send('<:error:543851339713609745> Provide a search term to search on.')
    return;
  }
  if (args.length === 1) {
    //term = args.toString()
  } else {
    //term = args.join(" ");
  }
   giphy.search(args.toString()).then(function (res) {
    let id = res.data[0].id
    let msgurl = `https://media.giphy.com/media/${id}/giphy.gif`
    const embed = new Discord.RichEmbed()
    .setDescription(`**[${args.toString()}](${res.data[0].url})**`)
    .setColor(`#d91414`)
    .setImage(msgurl)
    .setFooter(`© Yuki V5.3.1`, "https://cdn.discordapp.com/avatars/489219428358160385/19ad8d8c2fefd03fa0e1a2e49a2915c4.png")
    message.channel.send(embed)
      }
)
                           }
}