module.exports = class {
    constructor() {
        this.help = {
            category: ":game_die: Mini-Játékok",
            description: "Túl éled vagy meghalsz?"
        };
    }

    run(bot, message, args, randomNumber) {
    randomNumber = Math.floor(Math.random() * (6 - 1) + 1);
    // console.log(randomNumber);
    if(randomNumber==2){
        message.reply("Meghaltál! 💀");
    }else{
        message.reply("Túlélted! 😃");
    }
}
}