const Discord = require("discord.js");
const Fortnite = require("fortnite");
const ftnApi = new Fortnite('12c3ee2c-0183-4a0f-8b75-6f75d8d8caa9');
//Above, you need to get your api key. Register and generate a TRN-Api-Key at https://fortnitetracker.com/site-api
const currentSeason = "7";
module.exports = class {
    constructor() {
        this.help = {
            category: "Information",
            usage: "<epic-username> [platform pc/psn/xbl] {mode all/season}",
            description: "That user fortnite stats."
        };
    }

    async run(bot, message, args) {
       let username = args[0]; //Gets username
    let platform = args[1] || "pc"; //Gets platform, default: pc
    let mode = "life"; //Default stats: lifetime

    if (args[2]) {
        if (args[2].toLowerCase() == "all" || args[2].toLowerCase() == "season") {
            mode = args[2]; //Gets stats type, all or season stats
        } else {
            return message.channel.send(
                "<:error:543851339713609745> Use the right syntax: `y!fnstats <epic-username> [platform pc/xbl/psn] {mode all/season}`.\nFor lifetime stats use `y!fnstats <epic-username> [platform pc/xbl/psn]`"
            ); //Sends error message
        }
    }

    if (!username)
        //No username specified?
        return message.channel.send(
            "<:error:543851339713609745> No any username was not provided, make sure you are using the right syntax: `y!fnstats <epic-username> [platform pc/xbl/psn] {mode all/season}`.\nFor lifetime stats use `y!fnstats <epic-username> [platform pc/xbl/psn]`"
        ); //Sends error message

    let data = ftnApi
        .user(username, platform)
        .then(data => {
            let stats = data.stats; //Raw stats
            if (mode == "life") {
                let lifetime = stats.lifetime; //Lifetime stats
                let lifeScore = lifetime[6]["Score"];
                let lifeMatches = lifetime[7]["Matches Played"];
                let lifeWins = lifetime[8]["Wins"];
                let lifeWinPercent = lifetime[9]["Win%"];
                let lifeKills = lifetime[10]["Kills"];
                let lifeKd = lifetime[11]["K/d"];

                let lifeEmbed = new Discord.RichEmbed()
                    .setDescription(`Lifetime stats for ${data.username}`)
                    .setColor("#42b6f4")
                    .addField("Wins", lifeWins, true)
                    .addField("Kills", lifeKills, true)
                    .addField("K/D", lifeKd, true)
                    .addField("Matches Played", lifeMatches, true)
                    .addField("Score", lifeScore, true)
                    .addField("Win Percentage", lifeWinPercent, true)

                message.channel.send(lifeEmbed); //Sends lifetime stats
            }

            if (mode.toLowerCase() == "all") {
                //Solo stats
                let solo = stats.solo;
                let soloScore = solo.score;
                let soloMatches = solo.matches;
                let soloWins = solo.wins;
                let soloKills = solo.kills;
                let soloKd = solo.kd;

                let soloEmbed = new Discord.RichEmbed()
                    .setDescription(`Solo stats for ${data.username}`)
                    .setColor("#42b6f4")
                    .addField("Wins", soloWins, true)
                    .addField("Kills", soloKills, true)
                    .addField("K/D", soloKd, true)
                    .addField("Matches Played", soloMatches, true)
                    .addField("Score", soloScore, true)
                message.channel.send(soloEmbed); //Send solo stats

                //Duo stats
                let duo = stats.duo;
                let duoScore = duo.score;
                let duoMatches = duo.matches;
                let duoWins = duo.wins;
                let duoKills = duo.kills;
                let duoKd = duo.kd;

                let duoEmbed = new Discord.RichEmbed()
                    .setDescription(`Duo stats for ${data.username}`)
                    .setColor("#42b6f4")
                    .addField("Wins", duoWins, true)
                    .addField("Kills", duoKills, true)
                    .addField("K/D", duoKd, true)
                    .addField("Matches Played", duoMatches, true)
                    .addField("Score", duoScore, true)
                message.channel.send(duoEmbed); //Send duo stats

                //Squad stats
                let squad = stats.squad;
                let squadScore = squad.score;
                let squadMatches = squad.matches;
                let squadWins = squad.wins;
                let squadKills = squad.kills;
                let squadKd = squad.kd;

                let squadEmbed = new Discord.RichEmbed()
                    .setDescription(`Squad stats for ${data.username}`)
                    .setColor("#42b6f4")
                    .addField("Wins", squadWins, true)
                    .addField("Kills", squadKills, true)
                    .addField("K/D", squadKd, true)
                    .addField("Matches Played", squadMatches, true)
                    .addField("Score", squadScore, true)
                message.channel.send(squadEmbed); //Send squad stats
            }

            if (mode.toLowerCase() == "season") {
                //Solo season stats
                let currentSolo = stats.current_solo;
                let currentSoloScore = currentSolo.score;
                let currentSoloMatches = currentSolo.matches;
                let currentSoloWins = currentSolo.wins;
                let currentSoloKills = currentSolo.kills;
                let currentSoloKd = currentSolo.kd;

                let currentSoloEmbed = new Discord.RichEmbed()
                    .setDescription(
                        `Season ${currentSeason} Solo stats for ${data.username}`
                    )
                    .setColor("#42b6f4")
                    .addField("Wins", currentSoloWins, true)
                    .addField("Kills", currentSoloKills, true)
                    .addField("K/D", currentSoloKd, true)
                    .addField("Matches Played", currentSoloMatches, true)
                    .addField("Score", currentSoloScore, true)
                message.channel.send(currentSoloEmbed); //Send solo season stats

                //Duo season stats
                let currentDuo = stats.current_duo;
                let currentDuoScore = currentDuo.score;
                let currentDuoMatches = currentDuo.matches;
                let currentDuoWins = currentDuo.wins;
                let currentDuoKills = currentDuo.kills;
                let currentDuoKd = currentDuo.kd;

                let currentDuoEmbed = new Discord.RichEmbed()
                    .setDescription(
                        `Season ${currentSeason} Duo stats for ${data.username}`
                    )
                    .setColor("#42b6f4")
                    .addField("Wins", currentDuoWins, true)
                    .addField("Kills", currentDuoKills, true)
                    .addField("K/D", currentDuoKd, true)
                    .addField("Matches Played", currentDuoMatches, true)
                    .addField("Score", currentDuoScore, true)
                message.channel.send(currentDuoEmbed); //Send duo season stats

                //Squad season stats
                let currentSquad = stats.current_duo;
                let currentSquadScore = currentSquad.score;
                let currentSquadMatches = currentSquad.matches;
                let currentSquadWins = currentSquad.wins;
                let currentSquadKills = currentSquad.kills;
                let currentSquadKd = currentSquad.kd;

                let currentSquadEmbed = new Discord.RichEmbed()
                    .setDescription(
                        `Season ${currentSeason} Squad stats for ${data.username}`
                    )
                    .setColor("#42b6f4")
                    .addField("Wins", currentSquadWins, true)
                    .addField("Kills", currentSquadKills, true)
                    .addField("K/D", currentSquadKd, true)
                    .addField("Matches Played", currentSquadMatches, true)
                    .addField("Score", currentSquadScore, true)
     .setFooter(`© Yuki V5.2.0`, "https://cdn.discordapp.com/avatars/489219428358160385/c056d11e4e241630cd7b16aa262e48e0.png?size=2048")
                message.channel.send(currentSquadEmbed); //Send squad stats
            }
        })
        .catch(e => {
            //Error handling
            //console.log(e);
            return message.channel.send(
                "<:error:543851339713609745> User not found, make sure you are using the right syntax: `y!fnstats <epic-username> [platform pc/xbl/psn] {mode all/season}`.\nFor lifetime stats use `y!fnstats <epic-username> [platform pc/xbl/psn]`"
            ); //Send error message
        });
}
}