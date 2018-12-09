const Discord = require("discord.js");
module.exports = class {
    constructor() {
        this.help = {
            category: "Category 1",
            description: "a"
        };
    }

    async run (bot, message, args) {
      var rules1 = new Discord.RichEmbed()
        .addField("Rules (1/2):", "-------------------------------------Rules---------------------------\n" +
                                  "__**1.**__ No spamming or flooding the chat with messages, symbols or pictures etc. \n" +
                                  "__**2.**__ Do not type in all Caps, Bold, Italic or other formats unless you're a  Admin. \n" +
                                  "__**3.**__ No any NSFW image in non-NSFW channels. \n" +
                                  "__**4.**__ No racist or degrading content.\n" +
                                  "__**5.**__ No excessively cursing. \n" +
                                  "__**6.**__ No advertising other sites/discord servers without permission. \n" +
                                  "__**7.**__ No posting external links other than direct links to youtube\n", true)

        .setColor("0xFF0000")

var rules2 = new Discord.RichEmbed()
        .addField("Rules (2/2):", "__**8.**__ No using peoples usernames and/or posing as them. \n" +
                                  "__**9.**__ No begging or repeatedly asking for permissions in the chat. \n" +
                                  "__**10.**__. No offensive names or names which contain swear words. \n" +
                                  "__**11.**__ Do not argue with staff there decisions are final. \n" +
                                  "__**12.**__ Do not repeatedly message Moderators or Admins without permission \n" +
                                  "__**13.**__ Do not message people, Moderators or Admins with \"Stupid\" questions \n" +
                                  "-------------------------------------Rules---------------------------\n", true)

        .setColor("0xFF0000")


//console.log(args[0]);// user
//console.log(args[1]);// role
//console.log(args[2]);//time


            message.channel.send(rules1)
            message.channel.send(rules2)

              .then(function (message) {
                message.react("Bin2:362263530424107009")
              })

}

}