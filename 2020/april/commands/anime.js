const Discord = require("discord.js");
var Kitsu = require('kitsu');
var kitsu = new Kitsu();
var htmlToText = require('html-to-text');
const suggestLimit = 5;

function sanitize(value){
    return (value === null || value === "") ? "undefined" : String(value);
}
module.exports = class {
    constructor() {
        this.help = {
            category: "User",
            description: "Scrapes information from My Anime List and posts information via embed.",
          usage: "<animeseries>"
        };
    }

    async run(client, message, args) {
      let param = args[0]
      if(!param) return message.channel.send(`<:error:543851339713609745> Provide an anime series to lookup.`)
        let res = await kitsu.get('anime?filter[text]=' + param + '&page[limit]=' + suggestLimit);
        let dataRes = res.data[0];
        let replyData = {};
          let thumbImg = {url : replyData.url};
        replyData.url = sanitize(dataRes.posterImage.tiny)
        replyData.title = sanitize(dataRes.canonicalTitle);
        replyData.description = sanitize(dataRes.synopsis);
        replyData.rating = sanitize(dataRes.averageRating);
        replyData.age = sanitize(dataRes.ageRatingGuide);
        replyData.epiCount = sanitize(dataRes.episodeCount);
        replyData.epiLength = sanitize(dataRes.episodeLength);
        replyData.status = sanitize(dataRes.status);
      replyData.chapters = sanitize(dataRes.chapterCount);
        replyData.subtype = sanitize(dataRes.subtype)
    const malEmbed = new Discord.RichEmbed()
     .setColor(`#d91414`)
    .setTitle(replyData.title)
    .setDescription(replyData.description)
    .addField(`Rating`, replyData.rating, true)
    .addField(`Episodes`, replyData.epiCount, true)
    .addField(`Length`, replyData.epiLength + " minutes", true)
    .addField(`Age Rating`, replyData.age, true)
    .addField(`Status`, replyData.status, true)
    .addField(`Type`, replyData.subtype, true)
    .setThumbnail(replyData.url)
    .setFooter(`Kitsu.io`, "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSR9P5BnNTEOms0G2xF46pkph4T0KFlwvnbXnI4g4x9n0cktYY6")
      message.channel.send(malEmbed);




}
}