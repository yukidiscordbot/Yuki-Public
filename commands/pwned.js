const superagent = require("superagent");
const Discord = require('discord.js');

module.exports = class {
    constructor() {
        this.help = {
            category: ":checkered_flag: Speciális",
            description: "Egy felhasználónak beállítja hogy ne zavarják!"
        };
    }

    async run(client, message, args, level) {
    await message.delete(300);
    let {
        body
    } = await superagent
        .get(`https://haveibeenpwned.com/api/v2/breachedaccount/${args[0]}`)
        .catch(err => {
            message.channel.send(`:x: No results found for \`\`${args[0]}\`\``)
        });

    let out = `Breaches found for: ${args[0]}`;
    let po = 0;
    const format = body.forEach(i => {
        po++;
        out += `\n${po}.   ${i.Name}   breached on:   ${i.BreachDate}`
    })
    message.author.send(out);
}
}