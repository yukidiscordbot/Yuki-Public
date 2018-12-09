const Discord = require("discord.js");
let cdseconds = 5; 
const { Canvas } = require("canvas-constructor"); 
const { resolve, join } = require("path"); 
const { Attachment } = require("discord.js"); 
const { get } = require("snekfetch"); 
const superagent = require('superagent');

module.exports = class {
    constructor() {
        this.help = {
            category: ":checkered_flag: Speciális",
            description: "Egy felhasználónak beállítja hogy ne zavarják!"
        };
    }

    async run(bot, message, args) {
  
  let member;
if (message.mentions.users.first()) {
    member = message.mentions.users.first() || message.guild.users.get(args[0]) || message.guild.users.find("name", args[0]);

} else {
    member = message.author;
}
  
              async function createCanvas() {
var imageUrlRegex = /\?size=2048$/g;
let { body: background } = await superagent('https://clip2art.com/images/tombstone-clipart-20.png');
let { body: avatar } = await superagent(member.avatarURL.replace(imageUrlRegex, "?size=512"));
            return new Canvas(240,290)

.addImage(background,0,0,240,290)

.setColor("#060606")
.setTextFont("20px Comic Sans MS")
.setTextAlign("center")
.addText(`${member.username}`,120,90)

.addRoundImage(avatar, 65, 140, 100, 100, 50, 30, 30)
              
.toBufferAsync()
} 

  let rip = new Discord.Attachment(await createCanvas(), "rip.jpg")
await message.channel.send(rip)
  
}

} 