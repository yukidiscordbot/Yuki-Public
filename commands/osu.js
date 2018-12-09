const Discord = require('discord.js')
const osu = require('node-osu');
const api = new osu.Api("1022db727e11bd7de43517189fb8e2d64b70fccf" , {
    notFoundAsError: true,
    completeScores: false 
})
module.exports = class {
    constructor() {
        this.help = {
            category: ":checkered_flag: Speciális",
            description: "Szerverhez való csatlakozás."
        };
    }

    async run(bot, message, args) {
      let username = args[0]
  
  
  if (!args[0]) return message.channel.send('Please, provide a valid user name! (osu! player.)')
  
api.getUser({u: username}).then(user => {
  const embed = new Discord.RichEmbed()
  .setTitle('OSU! Player Informations')
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
  .setFooter("© Yuki V4.2.7", "https://data.whicdn.com/images/307645312/large.jpg?t=1519144430");
  message.channel.send(embed)
  
})

}

}
