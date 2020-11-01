const Discord = require('discord.js');
module.exports = class {
  constructor(client) {
    this.client = client;
  }

  async run(reaction, user, message) {
        if (reaction.emoji !== '⭐') return;
    if (message.author.bot) return message.channel.send(`<:error:543851339713609745> You cannot star bot messages.`);
          let logs = message.guild.channels.find("name", "starboard");
  if(!logs) return message.channel.send("<:error:543851339713609745> You need an starboard channel!");
    const fetchedMessages = await logs.fetchMessages({ limit: 100 });
    const stars = fetchedMessages.find(m => m.embeds[0].footer.text.startsWith('⭐') && m.embeds[0].footer.text.endsWith(message.id));
    if (stars) {
      const star = /^\⭐\s([0-9]{1,3})\s\|\s([0-9]{17,20})/.exec(stars.embeds[0].footer.text);
      const foundStar = stars.embeds[0];
      const image = message.attachments.size > 0 ? await this.extension(reaction, message.attachments.array()[0].url) : '';
      const embed = new Discord.RichEmbed()
        .setColor(foundStar.color)
        .setDescription(foundStar.description)
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setTimestamp()
        .setFooter(`⭐ ${parseInt(star[1])+1} | ${message.id}`)
        .setImage(image);
      logs.send(embed)
      await logs.fetchMessage(stars.id);
      await message.edit({ embed });
    }
    if (!stars) {
      const image = message.attachments.size > 0 ? await this.extension(reaction, message.attachments.array()[0].url) : '';
      if (image === '' && message.cleanContent.length < 1) return message.channel.send(`${user}, you cannot star an empty message.`);
      const embed = new Discord.RichEmbed()
        .setColor(15844367)
        .setDescription(message.cleanContent)
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setTimestamp(new Date())
        .setFooter(`⭐ 1 | ${message.id}`)
        .setImage(image);
      await logs.send({ embed });
    }
  }

  // Here we add the this.extension function to check if there's anything attached to the message.
  extension(reaction, attachment) {
    const imageLink = attachment.split('.');
    const typeOfImage = imageLink[imageLink.length - 1];
    const image = /(jpg|jpeg|png|gif)/gi.test(typeOfImage);
    if (!image) return '';
    return attachment;
  }
};