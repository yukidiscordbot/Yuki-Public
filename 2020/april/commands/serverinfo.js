const Discord = require("discord.js");

module.exports = class {
    constructor() {
        this.help = {
            category: "User",
            description: "Shows a server informations.",
        };
    }

    async run(bot, message, args) {
        const Icon = message.guild.iconURL === null
    ? 'https://discordapp.com/assets/6debd47ed13483642cf09e832ed0bc1b.png' : message.guild.iconURL
  const verified = message.guild.verified !== true ? 'No' : 'Yes'
  const afk_channel = message.guild.afkChannel === null ? '**No Channel**' : message.guild.afkChannel

  let region = ''
  if (message.guild.region === 'brazil') region = ':flag_br: Brazil'
  if (message.guild.region === 'europe') region = ':flag_eu: Europe'
  if (message.guild.region === 'hong-kong') region = ':flag_hk: Hong Kong'
  if (message.guild.region === 'india') region = ':flag_in: India'
  if (message.guild.region === 'japan') region = ':flag_jp: Japan'
  if (message.guild.region === 'russia') region = ':flag_ru: Russia'
  if (message.guild.region === 'singapore') region = ':flag_sg: Singapore'
  if (message.guild.region === 'south-africa') region = ':flag_za: South Africa'
  if (message.guild.region === 'sydney') region = ':flag_au: Australia'
  if (message.guild.region === 'us-central') region = ':flag_us: US Central'
  if (message.guild.region === 'us-east') region = ':flag_us: US East'
  if (message.guild.region === 'us-south') region = ':flag_us: US South'
  if (message.guild.region === 'us-west') region = ':flag_us: US West'
  let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
  let day = message.guild.createdAt.getDate()
  let month = 1 + message.guild.createdAt.getMonth()
  let year = message.guild.createdAt.getFullYear()
   let sicon = message.guild.iconURL;
     let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
   let serverembed = new Discord.RichEmbed()
   .setAuthor(message.guild.name, sicon)
.setFooter(`© Yuki V5.3.1`, "https://cdn.discordapp.com/avatars/489219428358160385/19ad8d8c2fefd03fa0e1a2e49a2915c4.png")
   .setColor("#d91414")
   .setThumbnail(sicon)
   .addField("ID", message.guild.id, true)
   .addField("Name", message.guild.name, true)
   .addField("Owner", message.guild.owner.user.tag, true)
   .addField("Region", `${region}`, true)
   .addField("AFK Channel", `${afk_channel}\n**${message.guild.afkTimeout}** seconds`, true)
   .addField("Channels", message.guild.channels.size, true)
   .addField("Total Members", message.guild.memberCount, true)
   .addField("Humans", message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size, true)
   .addField("Bots", message.guild.members.filter(m => m.user.bot).size, true)
   .addField("Online", online.size, true)
   .addField("Roles", message.guild.roles.size, true)
   .addField("Server Verification", `${verifLevels[message.guild.verificationLevel]}`, true)
      .addField('Server Created', `${year}/${month}/${day}`, true)
   message.channel.send(serverembed);

}
}