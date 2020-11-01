const Discord = require('discord.js');
const weather = require('weather-js');
module.exports = class {
    constructor() {
        this.help = {
            category: "Information",
            description: "The bot will view that location and post the weather of that location.",
          usage: "<location>"
        };
    }

    async run(bot, message, args) {
          weather.find({ search: args.join(' '), degreeType: 'C', timezone: 'UTC3' }, function (err, result) {
                       if(!result) return message.channel.send('<:error:543851339713609745> You didn\'t provide any location, yet.')
        if (result.length === 0) {
            return message.channel.send('<:error:543851339713609745> That location is dosen\'t exist.');
        }

        let current = result[0].current;

        const embed = new Discord.RichEmbed()
              .setColor(`#d91414`)
            .addField('Location', `${current.observationpoint}`, true)
            .addField('Day', `${current.day}`, true)
            .addField('Time', `${current.observationtime}`, true)
            .addField('Date', `${current.date}`, true)
            .addField('Sky', `${current.skytext}`, true)
            .addField('Temperature', `${current.temperature} °C`, true)
            .addField('Humidity', `${current.humidity}%`, true)
            .addField('Wind Speed', `${current.windspeed}`, true)
.setFooter(`© Yuki V5.3.1`, "https://cdn.discordapp.com/avatars/489219428358160385/19ad8d8c2fefd03fa0e1a2e49a2915c4.png")
        message.channel.send(embed);
    });
}
}