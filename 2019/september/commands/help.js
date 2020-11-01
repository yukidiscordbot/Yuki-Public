const fs = require('fs');
const Discord = require("discord.js");
module.exports = class {
    constructor() {
        this.help = {
            category: "Bot Owner",
            usage: "<command>",
            description: "Testing the new help menu."
        };
    }

    run(bot, m, args) {
                          const commandCount = fs.readdirSync('./commands').filter(c => c.endsWith('.js')).length;
let embed = new Discord.RichEmbed()
  .setColor(`#ffc0cb`)
.addField(`Fun (15)`, "`y!quiz`,`y!illegal`,`y!achievement`,`y!gay`, `y!ascii`, `y!emojify`, `y!8ball`, `y!dicksize`")
.addField(`Roleplay (6)`, "`y!pat`,`y!kiss`,`y!slap`,`y!hug`, `y!poke`, `y!ship`")
.addField(`Image (10)`, "`y!nekoavatars`,`y!waifu`,`y!cat`,`y!dog`,`y!avatar`,`y!neko`, `y!meme`, `y!animememe`, `y!rip`, `y!qrcode`")
.addField(`Moderation (13)`, "`y!ban`, `y!kick`, `y!purge`,`y!mute`,`y!tempmute`,`y!unban`,`y!unmute`,`y!report`, `y!addrole`, `y!removerole`, `y!say`, `y!verify`, `y!warn`")
.addField(`N.S.F.W (6)`, "`y!4k`, `y!anal`, `y!hentai`, `y!lewd`, `y!trap`, `y!urban`")
.addField(`Information (15)`, "`y!botinfo`, `y!invite`, `y!fnstats`, `y!level`, `y!leaderboard`, `y!osu`, `y!ping`, `y!steamstore`, `y!serverinfo`, `y!userinfo`, `y!roleinfo`, `y!weather`, `y!reminder`, `y!links`")
.addField(`Owner Only (3)`, "`y!eval`, `y!exec`, `y!test`")
     .setFooter(`© Yuki Old V4.35 | Total Commands ${commandCount}`, "https://cdn.discordapp.com/avatars/562357309548920840/0df609e7bd5aadad66701a3bcf4570ee.png?size=2048")
     .setTimestamp()
m.channel.send(embed)
}
}