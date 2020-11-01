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
  .setColor(`#d91414`)
.addField(`Fun (20)`, "`y!rps`, `y!divorce`, `y!marry`, `y!f`, `y!owoify`, `y!quiz`, `y!illegal`, `y!achievement`, `y!gay`, `y!ascii`, `y!emojify`, `y!8ball`, `y!dicksize`")
.addField(`Roleplay (7)`, "`y!pat`,`y!kiss`, `y!slap`,`y!hug`, `y!poke`, `y!ship`, `y!smug`")
.addField(`Image (10)`, "`y!gif`, `y!nekoavatars`, `y!waifu`, `y!cat`, `y!dog`, `y!avatar`, `y!neko`, `y!meme`, `y!animememe`, `y!rip`, `y!foxgirl`")
.addField(`Moderation (15)`, "`y!warnsinfo`, `y!massrole`, `y!ban`, `y!kick`, `y!purge`, `y!mute`, `y!tempmute`, `y!unban`, `y!unmute`, `y!report`, `y!addrole`, `y!removerole`, `y!say`, `y!verify`, `y!warn`")
.addField(`NSFW (15)`, "`y!nsfwneko`, `y!tits`, `y!bj`, `y!4k`, `y!anal`, `y!hentai`, `y!lewd`, ~~`y!trap`~~, `y!urban`, `y!yuri`, `y!blowjob`, `y!hentaigif`, `y!cum`, `y!nsfw-avatar`, `y!erok`")
.addField(`Information (19)`, "`y!account`, `y!anime`, `y!translate`, `y!profile`, `y!account`, `y!botinfo`, `y!invite`, `y!fnstats`, `y!leaderboard`, `y!osu`, `y!ping`, `y!steamstore`, `y!serverinfo`, `y!userinfo`, `y!roleinfo`, `y!weather`, `y!reminder`, `y!links`")
.addField(`Bot Owner (2)`, "`y!eval`, `y!exec`")
.addField(`Settings (2)`, "`y!config`, `y!setmoney`")
.addField(`Economy (10)`, "`y!work`, `y!money`, `y!rep`, `y!buy`, `y!coin`, `y!sell`, `y!daily`, `y!inventory`, `y!shop`, `y!balance`")
.addField(`Music (12)`, "`y!shuffle`, `y!queueclear`, `y!np`, `y!play`, `y!resume`, `y!pause`, `y!skip`, `y!volume`, `y!join`, `y!leave`, `y!stop`, `y!queue`")
// ${commandCount}
.setFooter(`© Yuki V5.3.1 | 112 commands in total`, "https://cdn.discordapp.com/avatars/489219428358160385/19ad8d8c2fefd03fa0e1a2e49a2915c4.png")
     .setTimestamp()
m.channel.send(embed)
    }
}