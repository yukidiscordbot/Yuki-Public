const fs = require("fs");
let xp = require("../xp.json");
const Discord = require('discord.js');
const config = require('../config.json')
module.exports = class {
    run(bot, m) {
  if(m.author.bot) return;
  if(m.channel.type === "dm") return;
      let prefix = config.prefix
        if (m.author.bot) return;
        bot.getConfig();
        if ((new RegExp(`^<@!?${bot.client.user.id}>$`)).exec(m.content)) return m.channel.sendEmbed(new Discord.RichEmbed()
      .setColor(`#a821f9`)
      .setTitle(`Hi! :wave:`)
      .setDescription(`Thank you for mention me! My prefix is **${config.prefix}**. And you can view my help command by typing **${config.prefix}help**.`))
      const mainPrefix = m.content.toLowerCase().startsWith(prefix.toLowerCase());
        const mention = (new RegExp(`^<@!?${bot.client.user.id}> `)).exec(m.content);
        if (!mainPrefix && !mention) return;

        const args = m.content.slice((mention || [prefix])[0].length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        bot.commandHandler.handleCommand(m, command, args)
        let xpAdd = Math.floor(Math.random() * 7) + 8;
  console.log(xpAdd);

  if(!xp[m.author.id]){
    xp[m.author.id] = {
      xp: 0,
      level: 1
    };
  }


  let curxp = xp[m.author.id].xp;
  let curlvl = xp[m.author.id].level;
  let nxtLvl = xp[m.author.id].level * 300;
  xp[m.author.id].xp =  curxp + xpAdd;
  if(nxtLvl <= xp[m.author.id].xp){
    xp[m.author.id].level = curlvl + 1;
    let lvlup = new Discord.RichEmbed()
    .setTitle("Level Up!")
    .setColor(`eb34de`)
    .addField("New Level", curlvl + 1);

    m.channel.send(lvlup).then(msg => {msg.delete(5000)});
  }
  fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
    if(err) console.log(err)
  });
  }
    }