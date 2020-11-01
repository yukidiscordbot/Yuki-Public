const superagent = require("snekfetch");
const Discord = require('discord.js')
module.exports = class {
    constructor() {
        this.help = {
            category: "Bot Owner",
            description: "If a new miniupdate available the owner will can update here the command. (Bot Owner Only!)",
          usage: "<command>"
       };

        this.ownerOnly = true;
    }

  async run(client, msg, args) {
  
    // We're going to be passing an extra argument, title 'ops'
    // We can choose what to pass into it via the index.js file
    // Now, we can access ops.ownerID & it will return the ID defined at the top of index.js 
  
    // Delete from cache
    try { // This will be a try statement incase the command isn't found
        delete require.cache[require.resolve(`./${args[0]}.js`)];
        // Since we're already in the commands folder, we won't need to specify it
    } catch (e) {
      // If we encouter an error, return & respond in chat
      return msg.channel.send(`<:error:543851339713609745> ${args[0]} is not updated! ${e}`);
    }
  
    // Finally, send an output if it hasn't returned yet
    msg.channel.send(`${args[0]} is now updated succesfully.`);
}
}