const { RichEmbed } = require('discord.js'), 
      { get } = require('node-superfetch');

module.exports = class {
    constructor() {
        this.help = {
            category: ":white_check_mark: Felhasználó", // Ezt átírhatod!
            description: "Random mém!" // Ezt átírhatod!
        };
    }

    async run(client, message, args, color) {
  try {
  const { body } = await get('https://api-to.get-a.life/meme')

  let memeEmbed = new RichEmbed() 
  .setColor(`#a821f9`)
  .setImage(body.url)
  
  message.channel.send(memeEmbed)
      } catch (e) {
    message.channel.send(`Oh no an error occurred :( \`${e.message}\` try again later!`);
  } 
    }
}

