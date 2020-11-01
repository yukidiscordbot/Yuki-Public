const Discord = require("discord.js");
const malScraper = require('mal-scraper');
module.exports = class {
    constructor() {
        this.help = {
            category: "User",
            description: "Scrapes information from My Anime List and posts information via embed.",
          usage: "<animeseries>"
        };
    }

    async run(client, message, args) {
        const search = `${args}`;
  if(!search) return message.channel.send("<:error:543851339713609745> You need to given a anime series to lookup.");

  malScraper.getInfoFromName(search)
    .then((data) => {
    const malEmbed = new Discord.RichEmbed()
      .setTitle(`${args}`.split(',').join(' '))
      .setThumbnail(data.picture)
    .setURL(data.url)
      .setColor('BLUE') //I personally use bubblegum pink!
      .addField('English Title', data.englishTitle, true)
      .addField('Japanese Title', data.japaneseTitle, true)
      .addField('Type', data.type, true)
      .addField('Episodes', data.episodes, true)
      .addField('Rating', data.rating, true)
      .addField('Aired', data.aired, true)
      .addField('Score', data.score, true)
      .addField('Score Stats', data.scoreStats, true)
         .setFooter(`© Yuki Old V4.35`, "https://cdn.discordapp.com/avatars/562357309548920840/0df609e7bd5aadad66701a3bcf4570ee.png?size=2048")

      message.channel.send(malEmbed);

      //console.log(data);
    })
    .catch((err) => console.log(err));




}
}