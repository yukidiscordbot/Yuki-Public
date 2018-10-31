module.exports = class {
    constructor() {
        this.help = {
            category: ":checkered_flag: Speciális",
            description: "Hívd meg botodat a szerveredre."
        };
    }

    run(bot, m, args) {
        return m.channel.send(`:white_check_mark: **Bot Meghívó LINK**\n Csatlakoztasd a te saját discord szerveredhez. https://discordapp.com/oauth2/authorize?client_id=489219428358160385&permissions=201850064&redirect_uri=http%3A%2F%2Fsplitxdiscordbots.weebly.com&response_type=code&scope=bot%20guilds%20guilds.join%20gdm.join%20messages.read`);
    }
};