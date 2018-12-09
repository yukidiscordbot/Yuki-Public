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
  
  let m = await message.channel.send(`Please wait to i load my bottoken...`);
  try {
  const { body } = await get('https://api-to.get-a.life/bottoken')

  let memeEmbed = new RichEmbed() 
  .setColor("RANDOM")
  .setDescription("This is not the real bottoken, but exposed.")
  .setTimestamp()
  .setTitle("OTA5NTQwODIyMTI1ODMzOA==.uDOFoc.QCnRpGhS8LjhTvDALvfyuBBXOe6")
  
  message.channel.send(memeEmbed).then(() => { m.delete();});
  } catch (e) {
    message.channel.send(`Oh no an error occurred :( \`${e.message}\` try again later!`);
  } 
}

}