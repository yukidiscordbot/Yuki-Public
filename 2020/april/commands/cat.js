const request = require('request');
const querystring = require('query-string');
const r2 = require('r2');
const CAT_API_URL = 'https://api.thecatapi.com/';
const CAT_API_KEY   = "c5ff2ade-9a66-4b2d-8e14-3988326b90b6";// get one free from theCatAPI.com
const Discord = require("discord.js"),
superagent = require('superagent');
module.exports = class {
    constructor() {
        this.help = {
            category: "Fun",
            description: "Random cat images."
        };
    }

    async run (client, message, args) {
     try{
        var images = await this.loadImage(message.author.username);
    
        var image = images[0];
    let embed = new Discord.RichEmbed()
    .setImage(image.url)
    .setColor(`#fc03f4`)
        console.log('message processed','showing image.id:',image.id)
        message.channel.send(embed);
    
      }catch(error)
      {
        console.log(error)
      }
    }

    async loadImage(sub_id)
    {

      var headers = {
          'X-API-KEY': CAT_API_KEY,
      }
      var query_params = {
        //'has_breeds':true,
        'mime_types':'jpg,png',
        'size':'med',  
        'sub_id': sub_id, 
        'limit' : 1
      }

      let queryString = querystring.stringify(query_params);
    
      try {
        let _url = CAT_API_URL + `v1/images/search?${queryString}`;
        var response = await r2.get(_url , {headers} ).json
      } catch (e) {
          console.log(e)
      }
      return response;
    }
}