const urban = require('relevant-urban')
const Discord = require('discord.js');

module.exports = class {
    constructor() {
        this.help = {
            category: "NSFW",
            description: "Uses a Urban Dictionary for some words.",
          usage: "<word>"
        };
    }

    async run(client, message, args, tools) {
              let embed2 = new Discord.RichEmbed()
      .setTitle(`<:error:543851339713609745> Channel Error`)
      .setDescription(`Sorry, but this command only can be used in a **N.S.F.W** marked channel.`)
      .setColor(`f01d0e`)
                if (!message.channel.nsfw) return message.channel.send(embed2)
       // First, we need to verify that they wrote text
  if (!args[0]) return message.channel.send(`<:error:543851339713609745> You need to specify a text!`);
  // This will return and send a message, (args[0] is the first word after the command)

  // Now, we can fetch the word from Urbandictionary
  let res = await urban(args.join(' ')).catch(e => { // This uses await, so the response will be held in the `res` variable
    // Although, if an error is found (word not found), this .catch() will run
    return message.channel.send("That text was didn't found in the Urban Dictionary database.");
  });

  // Now, we can form the response embed
  const embed = new Discord.RichEmbed()
    .setColor('GREEN')
    .setTitle(res.word)
    .setURL(res.urbanURL)
    .setDescription(`**Definition:**\n*${res.definition}*\n\n**Example:**\n*${res.example}*`)
    .addField('Author', res.author, true)
    .addField('Rating', `**\`Upvotes: ${res.thumbsUp} | Downvotes: ${res.thumbsDown}\`**`)
     .setFooter(`© Yuki V5.2.0`, "https://cdn.discordapp.com/avatars/489219428358160385/c056d11e4e241630cd7b16aa262e48e0.png?size=2048")
  message.channel.send(embed);

}
}