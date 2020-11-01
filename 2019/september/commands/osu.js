const Discord = require('discord.js')
const osu = require('node-osu');
const api = new osu.Api("1022db727e11bd7de43517189fb8e2d64b70fccf" , {
    notFoundAsError: true,
    completeScores: false 
})
module.exports = class {
    constructor() {
        this.help = {
            category: "Information",
            description: "OSU! players stats"
        };
    }

    async run(bot, message, args) {
      let username = args[0]
  
  
  if (!args[0]) return message.channel.send('<:error:543851339713609745> No user was provided!')
  
api.getUser({u: username}).then(user => {
  const embed = new Discord.RichEmbed()
  .setThumbnail(`http://s.ppy.sh/a/${user.id}}`)
  .setColor("#D0436A")
  .addField('Nickname', user.name, true)
  .addField('PP', Math.round(user.pp.raw), true)
  .addField('Rank', user.pp.rank, true)
  .addField('Level', Math.round(user.level), true)
  .addBlankField()
  .addField('Country', user.country, true)
  .addField('Country Rank', user.pp.countryRank, true)
  .addField('Playcount', user.counts.plays, true)
  .addField('Accuracy', `${user.accuracyFormatted}`, true)
   .setFooter(`© Yuki V5.2.1`, "https://cdn.discordapp.com/avatars/489219428358160385/0df609e7bd5aadad66701a3bcf4570ee.png")
  message.channel.send(embed)
  
})

}

}
