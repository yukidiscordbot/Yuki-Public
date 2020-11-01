const Discord = require("discord.js");
const fs = require("fs");
module.exports = class {
    constructor() {
        this.help = {
            category: "Moderation",
            description: "Adds a role from a member, no mention needed.",
           usage: "@User RoleWithoutMention"
        };

        this.ownerOnly = true;
    }

    async run(client, message, args) {
          let blacklist = JSON.parse(fs.readFileSync("./blacklist.json", "utf8"));
    let user = args[0];
    const amount = parseInt(user);

    if (isNaN(amount)) {
        return message.channel.send('<:error:543851339713609745> Invaild User ID as provided.');
    }
    //if (user = "blacklist") return message.reply('You need to imput a User ID');
    if (!user) return message.channel.send('<:error:543851339713609745> You need to provide a user id to put as blacklisted.');
    if (args[0] === '440475713523417088') return message.channel.send("<:error:543851339713609745> You cannot blacklist yourself.");
      let reason = args.slice(1).join(" ");
    if (!reason) return message.channel.send("<:error:543851339713609745> Specify a reason to put the provided user to blacklist.");
      
      if (!blacklist[user]) {
        blacklist[user] = {
          id: user,
          state: true//,
          //name: user.username
        }
        message.channel.send(`<:success:543851339696963584> <@${user}> (**${blacklist[user].id}**) has been banned from using my commands.`); 
      user.author.send(`<:error:543851339713609745> You have been blacklisted from me.\nBlacklisted by: ${message.author} (**${message.author.id}**)\nReason: ${reason}\nAppeal at our support server at https://discord.gg/ck8kajr.`)
        fs.writeFile("./blacklist.json", JSON.stringify(blacklist), err => {
            if(err) throw err;
          });

    return;
    }
    if (blacklist[user].state === true) {
        message.channel.send("<:error:543851339713609745> The provided id was already blacklisted from using my commands.");
    return;
    };

}
}