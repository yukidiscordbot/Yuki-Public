var figlet = require('figlet');
module.exports = class {
    constructor() {
        this.help = {
            category: "Fun",
            description: "The bot will generate your text into a ascii text.",
          usage: "<message>"
        };
    }

  async run(client, message, args, tools) {
  
  var maxLen = 100 // Kendiniz en yüksek harf sayısını ayarlayabilirsiniz
  
  if(args.join(' ').length > maxLen) return message.channel.send(`The allowed message is ${maxLen} character.`) 
  
  if(!args[0]) return message.channel.send('Please give me a message!');
  
  figlet(`${args.join(' ')}`, function(err, data) {
      if (err) {
          console.log('Bir hata var...');
          console.dir(err);
          return;
      }

      message.channel.send(`${data}`, {code: 'AsciiArt'});
  });


}

};