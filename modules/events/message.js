const Discord = require('discord.js')
const fs = require('fs');
const cooldown = new Set();
const humanizeDuration = require('humanize-duration');

module.exports = async (client, message) => {
	//If a guild was returning to be null, ignore instead of sending invite.join message.
    if (message.guild === null) return
    const settings = client.getSettings(message.guild.id)

//AI Settings
    client.util = require('../json/launch.json');
    if (message.guild) {
    if (message.content.startsWith(`<@${message.client.user.id}>`) || message.content.startsWith(`<@!${message.client.user.id}>`)) {
    client.util.handleTalk(message);
                  }
    }
    if(cooldown.has(message.author.id)){
    message.channel.send(`Please wait **5** seconds before entering an other command.`).then(msg => {
    msg.delete({ timeout: 10000 })
     })
   return;
  }

  if (client.config.blacklisted.includes(message.author.id)) return
  const prefix = message.guild === null ? 'y!' : 'y!'
  
  //Broken :(
  /* const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`)
  if (message.content.match(prefixMention)) {
    const embed = new Discord.MessageEmbed()()
    
   if (message.guild !== null) {
  }
  
  const filter = require("../json/filter.js")
  filter(client, message)*/
  
if (!message.content.startsWith(prefix)) return;


  const args = message.content.slice(prefix.length).trim().split(/ +/g)
  const command = args.shift().toLowerCase()
  let level = client.permlevels(message, client)
  const cmd = client.commands.get(command) || client.aliases.get(command)
  if (!client.commands.has(command) && !client.aliases.has(command)) return
  
  if (!cmd.conf.enabled) return message.channel.send('You are not allowed to use this command as it is currently disabled by the bot owner.')
  if (message.guild === null && cmd.conf.guildOnly) return message.channel.send('This command were locked to the guilds, stopping.')
  if (message.author.bot) return
  message.author.permLevels = level
  if (level < client.levelCache[cmd.conf.permLevels]) {
	  if (level < 5) {
    //if (client.getSettings(message.guild.id).noPermsAlert === 'true') {
      return message.channel.send(`Your permission level is currently at **${level}** (**${client.config.permLevels.find(l => l.level === level).name}**)\nThis command requires the following permission level **${client.levelCache[cmd.conf.permLevels]}** (**${cmd.conf.permLevels}**) to use this command.`)
    //} else return
	  }
  }

  message.flags = []
  while (args[0] && args[0][0] === '-') {
    message.flags.push(args.shift().slice(1))
  }
  
  
  if (message.channel.type !== "dm") {
    if (!message.channel.permissionsFor(message.guild.me).has('SEND_MESSAGES')) return
    
    if (client.tags.has(message.guild.id)) {
      Object.keys(client.tags.get(message.guild.id)).forEach(tagid => {
        const tag = client.tags.get(message.guild.id)[tagid]

        if (message.content.toLowerCase() == tag.name.toLowerCase()) message.channel.send(tag.text.replace('@user', '<@' + message.author.id + '>'))
      })
    }
  
    if (client.getSettings(message.guild.id).levelEnable === 'true') {
      const key = `${message.guild.id}-${message.author.id}`

      client.points.ensure(`${message.guild.id}-${message.author.id}`, {
        user: message.author.id,
        guild: message.guild.id,
        points: 0,
        level: 1
      })

        client.points.inc(key, 'points')

        const curLevel = Math.floor(0.5 * Math.sqrt(client.points.get(key, 'points')))
        const { level, points } = client.points.get(key);
		
        if (client.points.get(key, 'level') < curLevel) {
        const levelChannel = settings.levelChannel
        if (levelChannel && message.guild.channels.cache.find(c => c.name === settings.levelChannel)) {
	    message.guild.channels.cache.find(c => c.name === settings.levelChannel).send(`<@${message.author.id}> has advanced **up** to **${level}**!`)
          client.points.set(key, curLevel, 'level')
        }
      }
	  
if (message.content.toLowerCase().indexOf(prefix.toLowerCase()) !== 0) return

            }
    cooldown.add(message.author.id);
  setTimeout(() => {
    cooldown.delete(message.author.id);
  }, 1000);
    }
  try {
    cmd.run(client, message, args, level)

    client.uses.ensure(cmd.help.name, 1)
    client.uses.inc(cmd.help.name)
  } catch (err) {
      let ec = Math.round(Math.random() * 1069);
	  console.log(err)
    message.channel.send(`An internal error has occurred.\nPlease report this to Yuki's support server (\`support\` command to get the invite link) if the error still continues. (E-**${ec}**)\n\`\`\`${err}\`\`\``).catch()
  }
}
}