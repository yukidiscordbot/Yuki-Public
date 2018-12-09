const util = require("util");
const Discord = require('discord.js');
module.exports = class {
    constructor() {
        this.help = {
            category: ":warning: Tulajdonos számára:",
            usage: "<kód>",
            description: "Bot tulajdonosnak csak!"
        };

        this.ownerOnly = true;
    }

    async run(bot, message, args, color, prefix) {
        console.log(`\n${message.author.username}#${message.author.discriminator} Used y!eval Command On ${message.guild.name}`)
var util = require("util");
let code = args.join(' ');
      let argresult = args.join(' ');
  if (message.author.id != '440475713523417088') return;
    try {
  let ev = eval(code)
                let str = util.inspect(ev, {
                    depth: 1
                })
                 str = `${str.replace(new RegExp(`${bot.config.token}|${process.env.TOKEN}`, "g"), "YukiToken")}`;
                if(str.length > 1800) {
                    str = str.substr(0, 1800)
                    str = str + "..."
                }
                message.delete(); 
    message.channel.send("", { embed: { 
      color: 2551400,      
  fields: [{        
    name: '**Input**',     
      value: '\`\`\`' + code + '\`\`\`'         
},{     
      name: '**Output**', 
          value: '\`\`\`' + str + '\`\`\`'  
        }], 
      footer: {     
    text: ``    }     }});} catch (err) {   message.react("❌");
message.channel.send("", { embed: { 
      color: 2551400,      
  fields: [{        
    name: '**Input**',     
      value: '\`\`\`' + code + '\`\`\`'         
},{     
      name: '**Output**', 
          value: '\`\`\`' + err + '\`\`\`'  
        }], 
      footer: {     
    text: ``    }     }});    } }
}