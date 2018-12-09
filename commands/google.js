const Discord = require("discord.js")
const google = require("google");
const util = require("util");
module.exports = class {
    constructor() {
        this.help = {
            category: ":checkered_flag: Speciális",
            description: "Egy felhasználónak beállítja hogy ne zavarják!"
        };
    }

    async run (client, message, args) {
          if (!message.channel.nsfw) return message.reply(" You must be in a N.S.F.W channel to use this command.");
      var util = require("util");
                      let str = util.inspect(google, {
                    depth: 1
                })
                 str = `${str.replace(new RegExp(`pornhub|hentaihaven`, "g"), "no u for u")}`;
                if(str.length > 1800) {
                    str = str.substr(0, 1800)
                    str = str + "..."
                }
  google.resultsPerPage = 1
  google.protocol = 'https'
  var nextCounter = 0

  google(args, function (err, res) {
    if (err) console.log(err);

    for (var i = 0; i < res.links.length; ++i) {
      var link = res.links[i];
      if (link.title == null) {
      return void(0)
    }
      if (link.href == null)    {
      return void(0)
    }
      const gEmbed = new Discord.RichEmbed()
        .setAuthor(`Google search result for ${args}`.split(',').join(' '))
        .setColor('#ffc1cc')
        .setThumbnail('http://www.stickpng.com/assets/images/5847f9cbcef1014c0b5e48c8.png')
        .addField('Website', link.title)
        .addField('Description', link.description)
        .addField('URL', link.href);

        message.channel.send(gEmbed);
    }

    if (nextCounter < 1) {
      nextCounter += 1
      if (res.next) res.next()
    }

  });

}
}