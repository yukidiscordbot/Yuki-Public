const Discord = require('discord.js');
const weather = require('weather-js');
module.exports = class {
    constructor() {
        this.help = {
            category: ":checkered_flag: Speciális",
            description: "Egy felhasználónak beállítja hogy ne zavarják!"
        };
    }

    async run(bot, message, args) {
          weather.find({ search: args.join(' '), degreeType: 'C', timezone: 'UTC3' }, function (err, result) {
        if (result.length === 0) {
            return message.channel.send('Please enter a valid **location**!');
        }

        let current = result[0].current;

        const embed = new Discord.RichEmbed()
            .setAuthor('Weather', 'https://loading.io/spinners/sunny/lg.solar-light-ajax-spinner.gif')
            .setColor('#40a7ed')
            .addField('» Location', `${current.observationpoint}`, true)
            .addField('» Day', `${current.day}`, true)
            .addField('» Time', `${current.observationtime}`, true)
            .addField('» Date', `${current.date}`, true)
            .addField('» Sky', `${current.skytext}`, true)
            .addField('» Temperature', `${current.temperature} °C`, true)
            .addField('» Humidity', `${current.humidity}%`, true)
            .addField('» Wind Speed', `${current.windspeed}`, true)
            .setFooter('© Yuki V4.2.7 | Thanks codes to Redutzu#0002!')
            .setTimestamp()
        message.channel.send(embed);
    });
}
}