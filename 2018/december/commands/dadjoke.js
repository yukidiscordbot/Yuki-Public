const discord = require ("discord.js");
module.exports = class {
    constructor() {
        this.help = {
            category: ":checkered_flag: Speciális",
            description: "Egy felhasználónak beállítja hogy ne zavarják!"
        };
    }

    async run (bot, msg, args) {
      
	 let sa = require ("superagent");

    let {body} = await sa
    .get(`https://icanhazdadjoke.com/slack`);

    let o = new discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("" + body.attachments.map(a => a.text) + "")
    msg.channel.send(o)
	
}
}